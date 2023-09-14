import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

const base_url = "https://www.yakaboo.ua/ua/knigi.html?p=";
const num_pages = 200;
const image_folder = "images";

// Перевірка та створення папки для зображень
if (!fs.existsSync(image_folder)) {
	fs.mkdirSync(image_folder);
}

let existingBooks = [];

// Перевіряємо, чи є JSON-файл та читаємо дані про існуючі книжки
if (fs.existsSync('books.json')) {
	const jsonData = fs.readFileSync('books.json', 'utf-8');
	existingBooks = JSON.parse(jsonData);
}

const books = [];

async function fetchAndParsePage(page_number) {
	try {
		const url = `${base_url}${page_number}`;
		console.log(`Запит на сторінку ${url}...`);
		const response = await axios.get(url);
		console.log(`Отримано сторінку ${url}. Розпарсювання...`);
		const $ = cheerio.load(response.data);

		$('.category-card.category-layout').each((index, element) => {
			const author = $(element).find('.creators-label').text().trim();
			const title = $(element).find('.ui-card-title.category-card__name').text().trim();
			const img_url = $(element).find('.product-image.category-card-mode img').attr('src');

			// Перевіряємо, чи книжка вже існує
			const isExistingBook = existingBooks.some(existingBook => existingBook.title === title);

			if (!isExistingBook) {
				console.log(`Знайдено нову книжку: ${title} - ${author}`);
				// Завантажуємо зображення
				const img_name = path.join(image_folder, `${title}.jpg`);
				axios({
					url: img_url,
					responseType: 'stream'
				}).then(response => {
					response.data.pipe(fs.createWriteStream(img_name));
				});

				const book = {
					title: title,
					author: author,
					img: img_name
				};

				books.push(book);
			} else {
				console.log(`Книжка вже існує: ${title}`);
			}
		});
	} catch (error) {
		console.error(`Помилка при обробці сторінки ${page_number}: ${error.message}`);
	}
}

async function main() {
	console.log("Початок парсингу...");
	for (let page_number = 1; page_number <= num_pages; page_number++) {
		await fetchAndParsePage(page_number);
	}

	// Об'єднуємо існуючі та нові книжки
	const allBooks = existingBooks.concat(books);

	// Зберігаємо всі дані у JSON-файл
	const json_data = JSON.stringify(allBooks, null, 4);
	fs.writeFileSync('books.json', json_data, 'utf-8');

	console.log("Завершено! Дані збережено у файлі 'books.json'.");
}

main();
