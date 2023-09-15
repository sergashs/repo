import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

const base_url = "https://www.bookovka.ua/uk/13-khudozhnya-literatura/s-1/82-ukrayinska?p=";
const num_pages = 877;

// Функція для отримання всіх елементів зі сторінки каталогу за їхнім тайтлом
async function getItemsByTitle(title) {
	const items = [];

	for (let page_number = 1; page_number <= num_pages; page_number++) {
		try {
			const url = `${base_url}${page_number}`;
			console.log(`Запит на сторінку ${url}...`);
			const response = await axios.get(url);
			console.log(`Отримано сторінку ${url}. Розпарсювання...`);
			const $ = cheerio.load(response.data);

			$('.product__name a').each((index, element) => {
				const itemTitle = $(element).text().trim();
				if (itemTitle === title) {
					const itemLink = $(element).attr('href');
					items.push({
						title: itemTitle,
						link: itemLink
					});
				}
			});
		} catch (error) {
			console.error(`Помилка при обробці сторінки ${page_number}: ${error.message}`);
		}
	}

	return items;
}

// Виклик функції зі значенням тайтлу, який вас цікавить
const titleToSearch = "Назва книги"; // Замініть це на тайтл, який вас цікавить

async function main() {
	console.log(`Пошук елементів з тайтлом "${titleToSearch}"...`);
	const itemsWithSameTitle = await getItemsByTitle(titleToSearch);

	if (itemsWithSameTitle.length > 0) {
		console.log(`Знайдено елементи з тайтлом "${titleToSearch}":`);
		itemsWithSameTitle.forEach(item => {
			console.log(item.link); // URL елемента
		});
	} else {
		console.log(`Елементів з тайтлом "${titleToSearch}" не знайдено.`);
	}
}

main();
