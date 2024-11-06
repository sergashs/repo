import puppeteer from 'puppeteer';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Створюємо змінні __filename та __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Базовий URL для каталогу
const base_url = "https://readeat.com/catalog/xudoznia-literatura?page=1";
const num_pages = 185;

// Функція для затримки між запитами
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// Функція для збереження даних у файл
function appendDataToFile(data, fileName) {
	const filePath = path.join(__dirname, fileName);

	// Якщо файл вже існує, зчитайте існуючі дані
	let existingData = [];
	if (fs.existsSync(filePath)) {
		const fileContent = fs.readFileSync(filePath, 'utf-8');
		existingData = JSON.parse(fileContent);
	}

	// Додаємо нові дані до існуючих
	const updatedData = [...existingData, ...data];

	// Записуємо нові дані у файл
	fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf-8');
	console.log(`Дані збережено у файл ${fileName}`);
}

// Функція для отримання сторінки за допомогою Puppeteer
async function scrapePage(url) {
	const browser = await puppeteer.launch({ headless: true }); // Запуск браузера в headless-режимі
	const page = await browser.newPage();

	// Встановлення заголовків, щоб імітувати справжній браузер
	await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:106.0) Gecko/20100101 Firefox/106.0');

	console.log(`Відкриття сторінки: ${url}`);
	await page.goto(url, { waitUntil: 'networkidle2' }); // Чекаємо, поки сторінка повністю завантажиться

	const content = await page.content();
	await browser.close();

	return content;
}

// Функція для отримання елементів за їхнім тайтлом і збереження у файл після кожної сторінки
async function getItemsByTitle(title, fileName) {
	for (let page_number = 1; page_number <= num_pages; page_number++) {
		const items = []; // Очищаємо для кожної сторінки

		try {
			const url = `${base_url}${page_number}`;
			console.log(`Запит на сторінку ${url}...`);

			// Отримання HTML контенту за допомогою Puppeteer
			const pageContent = await scrapePage(url);

			console.log(`Отримано сторінку ${url}. Розпарсювання...`);
			const $ = cheerio.load(pageContent);

			// Перевірка кожного елементу на наявність тайтлу
			$('.product-name').each((index, element) => {
				const itemTitle = $(element).text().trim();
				const itemLink = $(element).attr('href');
				if (!title || itemTitle === title) {
					items.push({
						title: itemTitle,
						link: itemLink
					});
				}
			});

			// Збереження зібраних даних у файл після кожної сторінки
			if (items.length > 0) {
				appendDataToFile(items, fileName);
			} else {
				console.log(`Нічого не знайдено на сторінці ${page_number}`);
			}

			// Додаємо випадкову затримку перед наступним запитом (від 2 до 5 секунд)
			await delay(Math.random() * (5000 - 2000) + 2000);

		} catch (error) {
			console.error(`Помилка при обробці сторінки ${page_number}: ${error.message}`);
		}
	}
}

// Виклик функції зі значенням тайтлу, який вас цікавить
const titleToSearch = ""; // Замініть це на тайтл, який вас цікавить (або залиште пустим для збору всіх книг)
const fileName = 'books-data.json'; // Ім'я файлу для збереження даних

async function main() {
	console.log(`Пошук елементів з тайтлом "${titleToSearch}"...`);
	await getItemsByTitle(titleToSearch, fileName);
	console.log("Сканування завершено.");
}

main();
