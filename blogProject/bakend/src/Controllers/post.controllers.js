// import PostService from "../Services/post.service.js";

import dataBase from "../database.js";


class PostController {
	async getAll(req, res) {
		try {
			const sql = 'SELECT * FROM posts';

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
		try {
			const { title, content } = req.body;
			const sql = 'INSERT INTO posts (title, content) VALUES (?, ?)';

			await dataBase.query(sql, [title, content], (error, results) => {
				if (error) {
					return res.status(500).json({ error });
				}
				res.status(201).json({ id: results.insertId });
			});
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async getOne(req, res) {
		try {
			const sql = 'SELECT * FROM posts WHERE id = ?';
			await dataBase.query(sql, [req.params.id], (error, results) => {
				if (error) {
					return res.status(500).json({ error });
				}
				if (results.length === 0) {
					return res.status(404).json({ error: 'Post not found' });
				}
				res.json(results[0]);
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