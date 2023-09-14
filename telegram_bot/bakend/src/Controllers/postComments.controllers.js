import dataBase from "../database.js";


class PostCommentsController {
	async create(req, res) {
		try {
			const post_id = req.params.id;
			const { user_id, comment } = req.body;
			const sql = 'INSERT INTO comments (post_id, user_id, comment) VALUES (?, ?, ?)';

			await dataBase.query(sql, [post_id, user_id, comment], function (error, results, fields) {
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
			const sql = 'SELECT comments.*, users.username FROM comments JOIN users ON comments.user_id = users.id WHERE comments.post_id = ?';
			await dataBase.query(sql, [post_id], function (error, results, fields) {
				if (error) {
					console.error(error);
					return res.status(500).json({ error: 'An error occurred while fetching comments.' });
				}
				console.log('Fetched comments:', results);
				res.json(results);
			});
		} catch (e) {
			console.error(e);
			res.status(500).json({ error: 'An error occurred while fetching comments.' });
		}

	}
}

export default new PostCommentsController();