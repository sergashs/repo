import express from 'express';
import mongoose from 'mongoose';

import Post from './Post.js';

const PORT = 5000;
const DB_URL = `mongodb+srv://user:user@cluster0.ozbtwe9.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
	try {
		const { author, title, content } = req.body;
		const post = await Post.create({ author, content, title });
		res.status(200).json(post);
	} catch (e) {
		res.status(500).json(e);
	}
});


async function startApp() {
	try {
		await mongoose.connect(DB_URL, { useUnifiedTopology: true });
		app.listen(PORT, () => console.log('work'))
	} catch (e) {
		console.log(e)
	}
}

startApp();


