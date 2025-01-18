import jwt from "jsonwebtoken";
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
	async getSelfUser(req, res) {
		const token =
			req.body.token || req.query.token || req.headers["x-access-token"];

		if (!token) {
			return res.status(403).send("A token is required for authentication");
		}

		try {
			const decoded = jwt.verify(token, process.env.USER_TOKEN_KEY);
			req.user = decoded;
			const user_id = req.user.id;

			// console.log(req.user.id)

			await dataBase.query('SELECT id, username, email FROM users WHERE id = ?', [user_id], (error, results) => {
				if (error) {
					return res.status(500).json({ message: 'Server error' });
				}

				const user = results[0];
				if (!user) {
					return res.status(401).json({ message: 'User not found' });
				}

				// attach the user to the request object for use in other middleware/handlers
				// req.user = user;

				res.json(user);
			});

			console.log(req.user)
		} catch (err) {
			return res.status(401).send("Invalid Token");
		}
	}

}


export default new UserController();