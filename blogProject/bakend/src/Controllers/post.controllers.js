import dataBase from "../database.js";
import imgService from "../Services/img.service.js";


class PostController {
	async getAll(req, res) {
		try {
			// const sql = 'SELECT * FROM posts';

			const sql = `
            SELECT posts.*, COUNT(comments.id) AS comments_count
            FROM posts
            LEFT JOIN comments ON posts.id = comments.post_id
            GROUP BY posts.id
        `;

			await dataBase.query(sql, (error, results) => {
				if (error) {
					return res.status(500).json({ error });
				}
				res.json(results);
			});
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async create(req, res) {
		const imgName = imgService.saveFIle(req.files && req.files.img);

		try {
			const { title, content } = req.body;
			const sql = 'INSERT INTO posts (title, content, img) VALUES (?, ?, ?)';

			await dataBase.query(sql, [title, content, imgName], (error, results) => {
				if (error) {
					return res.status(500).json({ error });
				}

				res.status(201).json({ id: results.insertId, });

			});
		} catch (e) {
			res.status(500).json(e);

		}
	}

	async getOne(req, res) {
		try {
			const sql = 'SELECT * FROM posts WHERE id = ?';
			await dataBase.query(sql, [req.params.id], async (error, results) => {
				if (error) {
					return res.status(500).json({ error });
				}
				if (results.length === 0) {
					return res.status(404).json({ error: 'Post not found' });
				}

				const post = results[0];

				// Отримання IP-адреси клієнта
				const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

				// Якщо IP-адреса вже була відвідана, то не збільшуємо кількість унікальних переглядів
				if (!post.viewers.split(',').includes(ip)) {
					post.viewers += `,${ip}`;
					post.views++;
				}

				// Оновлення запису статті в базі даних
				const updatePostSql = `UPDATE posts SET views=${post.views}, viewers='${post.viewers}' WHERE id=${req.params.id}`;
				await dataBase.query(updatePostSql, err => {
					if (err) {
						return res.status(500).json({ error: err.message });
					}
					res.json(post);
				});
			});
		} catch (e) {
			res.status(500).json(e);
		}
	}


	async update(req, res) {
		try {
			const { title, content } = req.body;
			const sql = 'UPDATE posts SET title = ?, content = ? WHERE id = ?';

			await dataBase.query(sql, [title, content, req.params.id], (error, results) => {
				if (error) {
					return res.status(500).json({ error });
				}
				if (results.affectedRows === 0) {
					return res.status(404).json({ error: 'Post not found' });
				}
				res.json({ success: 'Post updated' });
			});
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async delete(req, res) {
		try {
			const sql = 'DELETE FROM posts WHERE id = ?';
			await dataBase.query(sql, [req.params.id], (error, results) => {
				if (error) {
					return res.status(500).json({ error });
				}
				if (results.affectedRows === 0) {
					return res.status(404).json({ error: 'Post not found' });
				}
				res.json({ success: 'Post deleted' });
			});

		} catch (e) {
			res.status(500).json(e);
		}
	}
}

export default new PostController();