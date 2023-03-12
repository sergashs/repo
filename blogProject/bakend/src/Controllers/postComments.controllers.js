import dataBase from "../database.js";


class PostCommentsController {
	async create(req, res) {
		try {
			const post_id = req.params.id;
			const { username, comment } = req.body;
			const sql = 'INSERT INTO comments (post_id, username, comment) VALUES (?, ?, ?)';

			await dataBase.query(sql, [post_id, username, comment], function (error, results, fields) {
				if (error) {
					return res.status(500).json({ error });
				}

				res.status(201).json('A comment has been added');
			});
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async getOne(req, res) {
		try {
			const post_id = req.params.id;
			const sql = 'SELECT * FROM comments WHERE post_id = ?';

			await dataBase.query(sql, [post_id], function (error, results, fields) {
				if (error) {
					return res.status(500).json({ error });
				}

				res.json(results);
			});
		} catch (e) {
			res.status(500).json(e);

		}
	}
}

export default new PostCommentsController();