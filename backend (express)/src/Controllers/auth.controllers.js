import User from "../Models/User/user.js";
import Role from "../Models/User/role.js";
import bcrypt from "bcryptjs";

class authController {
	async registration(req, res) {
		try {

		} catch (e) {
			console.log(e);
			res.status(400).json({ message: "Registration error" });
		}
	}

	async login(req, res) {
		try {
			const { username, password } = req.body;
			const candidate = await User.findOne({ username });
			if (candidate) {
				return res.status(400).json({ message: "User with the same name already exists" })
			}

			const hashPassword = bcrypt.hashSync(password, 7);
			const user = new User({ username, password: hashPassword })
		} catch (e) {
			console.log(e);
			res.status(400).json({ message: "Login error" });
		}
	}

	async getUsers(req, res) {
		try {

		} catch (e) {

		}
	}
}

export default new authController();