import express from 'express';
import mongoose from 'mongoose';
import postsRouter from "./src/Routes/posts.routes.js";
import fileUpload from 'express-fileupload';

const PORT = 5000;
const DB_URL = `mongodb+srv://user:user@cluster0.ozbtwe9.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', postsRouter);



async function startApp() {
	try {
		await mongoose.connect(DB_URL, { useUnifiedTopology: true });
		app.listen(PORT, () => console.log('work'))
	} catch (e) {
		console.log(e)
	}
}

startApp();


