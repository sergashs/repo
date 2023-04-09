import dataBase from "../database.js";

class UserController {
	async getUser(req, res) {
		try {
			const user_id = req.params.id;
			const sql = 'SELECT id, username, email FROM users WHERE id = ?';
			await dataBase.query(sql, [user_id], function (error, results, fields) {
				if (error) {
					console.error(error);
					return res.status(500).json({ error: 'An error occurred while fetching user info.' });
				}
				console.log('Fetched user:', results);
				res.json(results);
			});
		} catch (e) {
			console.error(e);
			res.status(500).json({ error: 'An error occurred while fetching user.' });
		}

	}

}


export default new UserController();