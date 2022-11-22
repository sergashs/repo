<template>
	<div class="home">
		<span class="p-input-icon-left input-holder">
			<i class="pi pi-search" />
			<InputText v-model="search" @input="onInput" placeholder="Пошук" />
		</span>

		<div class="result">
			<table>
				<thead>
					<tr>
						<th width="155">Вулиця</th>
						<th>Номери будинків</th>
						<th>Індекс</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in searchResut" :key="index">
						<td class="text-center">{{ item.street }}</td>
						<td>
							<template v-for="(houseItem, i) in item.houseNumbers" :key="i">{{ houseItem }}, </template>
						</td>
						<td>{{ item.index }}</td>
					</tr>
					<tr v-if="searchResut.length <= 0">
						<td colspan="4" style="text-align: center">співпадінь не знайдено</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import Lviv from "@/data/lviv.json";

export default {
	data() {
		return {
			search: "",
			searchResut: "",
			cars: [
				{ id: "1000", street: "f230fh0g3", name: "Bamboo Watch", description: "Product Description", image: "bamboo-watch.jpg", price: 65, category: "Accessories", quantity: 24, inventoryStatus: "INSTOCK", rating: 5 },
				{ id: "1001", street: "nvklal433", name: "Black Watch", description: "Product Description", image: "black-watch.jpg", price: 72, category: "Accessories", quantity: 61, inventoryStatus: "INSTOCK", rating: 4 },
				{ id: "1002", street: "zz21cz3c1", name: "Blue Band", description: "Product Description", image: "blue-band.jpg", price: 79, category: "Fitness", quantity: 2, inventoryStatus: "LOWSTOCK", rating: 3 },
				{ id: "1003", street: "244wgerg2", name: "Blue T-Shirt", description: "Product Description", image: "blue-t-shirt.jpg", price: 29, category: "Clothing", quantity: 25, inventoryStatus: "INSTOCK", rating: 5 },
				{ id: "1004", street: "h456wer53", name: "Bracelet", description: "Product Description", image: "bracelet.jpg", price: 15, category: "Accessories", quantity: 73, inventoryStatus: "INSTOCK", rating: 4 },
				{ id: "1005", street: "av2231fwg", name: "Brown Purse", description: "Product Description", image: "brown-purse.jpg", price: 120, category: "Accessories", quantity: 0, inventoryStatus: "OUTOFSTOCK", rating: 4 },
				{ id: "1006", street: "bib36pfvm", name: "Chakra Bracelet", description: "Product Description", image: "chakra-bracelet.jpg", price: 32, category: "Accessories", quantity: 5, inventoryStatus: "LOWSTOCK", rating: 3 },
				{ id: "1007", street: "mbvjkgip5", name: "Galaxy Earrings", description: "Product Description", image: "galaxy-earrings.jpg", price: 34, category: "Accessories", quantity: 23, inventoryStatus: "INSTOCK", rating: 5 },
				{ id: "1008", street: "vbb124btr", name: "Game Controller", description: "Product Description", image: "game-controller.jpg", price: 99, category: "Electronics", quantity: 2, inventoryStatus: "LOWSTOCK", rating: 4 },
				{ id: "1009", street: "cm230f032", name: "Gaming Set", description: "Product Description", image: "gaming-set.jpg", price: 299, category: "Electronics", quantity: 63, inventoryStatus: "INSTOCK", rating: 3 }
			]
		};
	},
	mounted() {
		const array = ["повітряна", "Озерна", "Папоротна", "Широка"];

		array.forEach((el) => {
			if (el.match("пов") && el.match("пов")[0].length >= 3) {
				console.log("length > 3");
			}
		});
	},
	methods: {
		onInput(event) {
			let result = Lviv.filter((el) => {
				return el.street.toLowerCase().match(event.target.value.toLowerCase()) && el.street.toLowerCase().match(event.target.value.toLowerCase())[0].length >= 3;
			});

			this.searchResut = result;
		}
	}
};
</script>

<style lang="scss" scoped>
.home {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 100px;

	.result {
		width: 100%;
		max-width: 600px;
		margin: auto;

		table {
			width: 100%;
			border-collapse: collapse;
			font-size: 14px;
			border: solid 1px #e9ecef;
			text-align: left;

			thead {
				th {
					padding: 10px 15px;
					font-weight: 400;
					background: #f8f9fa;
					border-bottom: solid 1px #e9ecef;

					&:not(:last-child) {
						border-right: solid 1px #e9ecef;
					}
				}
			}

			tbody {
				td {
					padding: 10px 15px;
					border-bottom: solid 1px #e9ecef;

					&:not(:last-child) {
						border-right: solid 1px #e9ecef;
					}
				}
			}
		}
	}

	.input-holder {
		margin-bottom: 50px;
	}
}
</style>
