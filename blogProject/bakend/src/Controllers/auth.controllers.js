import dataBase from "../database.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateAccessToken = (id, username, email) => {
	const payload = {
		id, username, email
	}
	return jwt.sign(payload, process.env.USER_TOKEN_KEY, { expiresIn: "24h" });
}

class AuthController {
	async register(req, res) {
		try {

			const { username, password, email } = req.body;
			const hashedPassword = await bcrypt.hash(password, 10);

			const existingUser = await new Promise((resolve, reject) => {
				dataBase.query(
					'SELECT * FROM users WHERE username = ?',
					[username],
					(error, results) => {
						if (error) {
							reject(error);
						} else {
							resolve(results[0]);
						}
					}
				);
			});

			if (existingUser) {
				return res.status(400).json({ message: "User with the same name already exists" })
			}


			await dataBase.query('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', [username, hashedPassword, email], (error, results) => {
				if (error) {
					console.log(error);
					res.status(500).json({ message: 'Internal server error' });
				} else {
					res.status(200).json({ message: 'User registered successfully' });
				}
			});
		} catch (e) {
			res.status(500).json({ message: 'Internal server error' });
		}
	}

	async login(req, res) {
		try {
			const { username, password } = req.body;
			await dataBase.query('SELECT * FROM users WHERE username = ?', [username], async (error, results) => {
				if (error) {
					console.log(error);
					res.status(500).json({ message: 'Internal server error' });
				} else if (results.length == 0) {
					res.status(401).json({ message: 'Invalid credentials' });
				} else {
					const match = await bcrypt.compare(password, results[0].password);
					if (match) {
						const token = generateAccessToken(results[0].id, results[0].username, results[0].email)
						res.status(200).json({ token: token });
					} else {
						res.status(401).json({ message: 'Invalid credentials' });
					}
				}
			});
		} catch {
			res.status(500).json({ message: 'Internal server error' });
		}
	}


}

export default new AuthController();