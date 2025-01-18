import express from 'express';
import cors from 'cors';
import userRouter from "./src/Routes/user.routes.js";
import postsRouter from "./src/Routes/posts.routes.js";
import postCommentsRouter from "./src/Routes/postComments.routes.js";
import authRouter from "./src/Routes/auth.routes.js";
import dataBase from "./src/database.js";
import fileUpload from 'express-fileupload';

const PORT = 5000;

const app = express();
app.use((req, res, next) => {
	setTimeout(() => {
		next();
	}, 10);
});


app.use(cors());
app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', postsRouter);
app.use('/api', postCommentsRouter);
app.use('/api', authRouter);
app.use('/api', userRouter);



import auth from "./src/Middleware/auth.js";

app.post("/welcome", auth, (req, res) => {
	res.status(200).send("Welcome 🙌 ");
});


async function startApp() {
	try {
		await dataBase.connect();
		app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))
	} catch (e) {
		console.log(e)
	}
}

startApp();