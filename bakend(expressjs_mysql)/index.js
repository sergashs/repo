import express from 'express';
import postsRouter from "./src/Routes/posts.routes.js";
import dataBase from "./src/database.js";

const PORT = 5000;

const app = express();
app.use(express.json());
app.use('/api', postsRouter)




async function startApp() {
	try {
		await dataBase.connect();
		app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))
	} catch (e) {
		console.log(e)
	}
}

startApp();