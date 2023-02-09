import mongoose from "mongoose";

const User = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	role: [{ type: String, ref: "Role" }],
	bookmarks: []
})

export default mongoose.model("User", User);