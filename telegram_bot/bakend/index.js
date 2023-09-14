import express from 'express';
import TelegramBot from 'node-telegram-bot-api';
// import cors from 'cors';
// import userRouter from "./src/Routes/user.routes.js";
// import postsRouter from "./src/Routes/posts.routes.js";
// import postCommentsRouter from "./src/Routes/postComments.routes.js";
// import authRouter from "./src/Routes/auth.routes.js";
import dataBase from "./src/database.js";
// import fileUpload from 'express-fileupload';

const PORT = 6000;

const app = express();
// app.use((req, res, next) => {
// 	setTimeout(() => {
// 		next();
// 	}, 0);
// });





// app.use(cors());
// app.use(express.json());
// app.use(express.static('static'));
// app.use(fileUpload({}));
// app.use('/api', postsRouter);
// app.use('/api', postCommentsRouter);
// app.use('/api', authRouter);
// app.use('/api', userRouter);



// import auth from "./src/Middleware/auth.js";

// app.post("/welcome", auth, (req, res) => {
// 	res.status(200).send("Welcome 🙌 ");
// });


const token = '6158280482:AAEPQTQpRYLiuCdVRAEAl70FhV6m-JoyGAU';
const bot = new TelegramBot(token, { polling: true });

// Маршрут для обробки команди /start
app.get('/start', (req, res) => {
	// Отримання chat_id з запиту
	const chatId = req.query.chatId;

	// Відправка повідомлення в бота за chatId
	bot.sendMessage(chatId, 'Вас вітає бот!');


	const insertUserQuery = 'INSERT INTO users (chatId) VALUES (?)';
	db.query(insertUserQuery, [chatId], (err, result) => {
		if (err) {
			console.error('Error inserting chatId into users table:', err);
		} else {
			console.log('chatId saved to the database');
		}
	});


	// Тут ви можете зберегти chatId у вашій базі даних
	// і використовувати його для подальшої взаємодії з користувачем

	res.send('Стартова команда оброблена.');
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