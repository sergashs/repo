<template>
	<div class="home">
		<span class="p-input-icon-left">
			<i class="pi pi-search" />
			<InputText v-model="search" @input="onInput" placeholder="Пошук" />
		</span>

		<ul class="result-list">
			<li v-for="(item, index) in searchResut" :key="index">
				<small
					>{{ item.street }}, номери будинків (<template v-for="(houseItem, i) in item.houseNumbers" :key="i">{{ houseItem }}, </template>), index: {{ item.index }}</small
				>
			</li>
		</ul>

		<!-- searchResut: {{ searchResut }} -->
		<!-- <table>
			<tbody>
				<tr>
					<th>Вулиця</th>
					<th>Будинок</th>
					<th>Індекс</th>
				</tr>
				<tr>
					<td>вулиця Абхазька</td>
					<td>1, 1А, 4, 5, 6, 7, 9</td>
					<td><a href="https://postindex.pp.ua/uk/index/79037.html">79037</a></td>
				</tr>
			</tbody>
		</table> -->
		<!-- <div class="form-demo">
			<Dialog v-model:visible="showMessage" :breakpoints="{ '960px': '80vw' }" :style="{ width: '30vw' }" position="top">
				<div class="flex align-items-center flex-column pt-6 px-3">
					<i class="pi pi-check-circle" :style="{ fontSize: '5rem', color: 'var(--green-500)' }"></i>
					<h5>Registration Successful!</h5>
					<p :style="{ lineHeight: 1.5, textIndent: '1rem' }">
						Your account is registered under name <b>{{ name }}</b> ; it'll be valid next 30 days without activation. Please check <b>{{ email }}</b> for activation instructions.
					</p>
				</div>
				<template #footer>
					<div class="flex justify-content-center">
						<Button label="OK" @click="toggleDialog" class="p-button-text" />
					</div>
				</template>
			</Dialog>

			<div class="flex justify-content-center">
				<div class="card">
					<h5 class="text-center">Register</h5>
					<form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
						<Input
							:v-object="v$.name"
							label="Name"
							:error="{
								invalid: v$.name.$invalid,
								submitted: submitted,
								pending: v$.name.$pending.$response
							}"
						/>

						<Input
							:v-object="v$.email"
							label="Email"
							:error="{
								invalid: v$.email.$invalid,
								submitted: submitted,
								pending: v$.email.$pending.$response,
								error: v$.email.$error
							}"
						/>

						<Button type="submit" label="Submit" class="mt-2" />
					</form>
				</div>
			</div>
		</div> -->
	</div>
</template>

<script>
// import { email, required } from "@vuelidate/validators";
// import { useVuelidate } from "@vuelidate/core";
// import Input from "@/components/Input";
import Lviv from "@/data/lviv.json";

export default {
	// setup: () => ({ v$: useVuelidate() }),
	// components: {
	// 	Input
	// },
	// data() {
	// 	return {
	// 		name: "",
	// 		email: "",
	// 		password: "",
	// 		date: null,
	// 		country: null,
	// 		accept: null,
	// 		submitted: false,
	// 		countries: null,
	// 		showMessage: false
	// 	};
	// },
	// countryService: null,
	// validations() {
	// 	return {
	// 		name: {
	// 			required
	// 		},
	// 		email: {
	// 			required,
	// 			email
	// 		}
	// 	};
	// },
	// methods: {
	// 	handleSubmit(isFormValid) {
	// 		this.submitted = true;
	// 		if (!isFormValid) {
	// 			return;
	// 		}
	// 		this.toggleDialog();
	// 	},
	// 	toggleDialog() {
	// 		this.showMessage = !this.showMessage;
	// 		if (!this.showMessage) {
	// 			this.resetForm();
	// 		}
	// 	},
	// 	resetForm() {
	// 		this.name = "";
	// 		this.email = "";
	// 		this.submitted = false;
	// 	}
	// }
	data() {
		return {
			search: "",
			searchResut: ""
		};
	},
	mounted() {
		// const elTable = document.querySelectorAll("table tr");
		// let compeltedArray = [];
		// elTable.forEach((el) => {
		// 	const houseNumbersFormatted = el.children[1].innerHTML.split(",").map((item) => {
		// 		return item.replace(" ", "");
		// 	});
		// 	compeltedArray.push({
		// 		street: el.children[0].innerHTML.replace("вулиця ", ""),
		// 		houseNumbers: houseNumbersFormatted,
		// 		index: el.children[2].children[0] && el.children[2].children[0].innerHTML
		// 	});
		// });
		// console.log(compeltedArray);

		const array = ["повітряна", "Озерна", "Папоротна", "Широка"];

		array.forEach((el) => {
			if (el.match("пов") && el.match("пов")[0].length >= 3) {
				console.log("length > 3");
			}
		});
	},
	methods: {
		onInput(event) {
			// console.log(event.target.value);

			let result = Lviv.filter((el) => {
				// return event.target.value.toLowerCase() == el.street.toLowerCase() ? el : null;
				// return el.street.toLowerCase().match(event.target.value.toLowerCase());
				return el.street.toLowerCase().match(event.target.value.toLowerCase()) && el.street.toLowerCase().match(event.target.value.toLowerCase())[0].length >= 3;
			});

			console.log(result);

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
	padding-top: 100px;

	.result-list {
		margin: 0;
		padding: 0;
		list-style: none;

		li {
		}
	}
}

// .form-demo {
// 	.card {
// 		min-width: 450px;

// 		form {
// 			margin-top: 2rem;
// 		}

// 		.field {
// 			margin-bottom: 1.5rem;
// 		}
// 	}

// 	@media screen and (max-width: 960px) {
// 		.card {
// 			width: 80%;
// 		}
// 	}
// }
</style>
