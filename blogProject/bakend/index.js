import express from 'express';
import cors from 'cors';
import postsRouter from "./src/Routes/posts.routes.js";
import authRouter from "./src/Routes/auth.routes.js";
import dataBase from "./src/database.js";

const PORT = 5000;

const app = express();
app.use((req, res, next) => {
	setTimeout(() => {
		next();
	}, 1000); // затримка в 5 секунд
});


app.use(cors());
app.use(express.json());
app.use('/api', postsRouter);
app.use('/api', authRouter);



// import auth from "./src/Middleware/auth.js";

// app.post("/welcome", auth, (req, res) => {
// 	res.status(200).send("Welcome 🙌 ");
// });


async function startApp() {
	try {
		await dataBase.connect();
		app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))
	} catch (e) {
		console.log(e)
	}
}

startApp();