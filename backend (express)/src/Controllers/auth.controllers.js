import User from "../Models/User/user.js";
import Role from "../Models/User/role.js";
import bcrypt from "bcryptjs";
import { validationResult } from 'express-validator';
import jwt from "jsonwebtoken";

const generateAccessToken = (id, role) => {
	const payload = {
		id, role
	}
	return jwt.sign(payload, "SECRET_KEY_RANDOM", { expiresIn: "24h" });
}

class authController {
	async registration(req, res) {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ message: "Error in registration", errors })
			}

			const { username, password } = req.body;
			const candidate = await User.findOne({ username });
			if (candidate) {
				return res.status(400).json({ message: "User with the same name already exists" })
			}

			const hashPassword = bcrypt.hashSync(password, 7);
			const userRole = await Role.findOne({ value: "user" });
			const user = new User({ username, password: hashPassword, role: [userRole.value] });
			await user.save();
			return res.json({ message: "User was successfully registered" });
		} catch (e) {
			console.log(e);
			res.status(400).json({ message: "Registration error" });
		}
	}

	async login(req, res) {
		try {
			const { username, password } = req.body;
			const user = await User.findOne({ username });
			if (!user) {
				return res.status(400).json({ message: `User ${username} is not found` })
			}
			const validPassword = bcrypt.compareSync(password, user.password);
			if (!validPassword) {
				return res.status(400).json({ message: "Wrong password entered" })
			}
			const token = generateAccessToken(user._id, user.role);
			console.log(token)
			return res.json({ token });
		} catch (e) {
			console.log(e);
			res.status(400).json({ message: "Login error", });
		}
	}

	async getUsers(req, res) {
		try {

		} catch (e) {

		}
	}
}

export default new authController();