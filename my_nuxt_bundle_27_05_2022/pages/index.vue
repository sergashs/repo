<template>
	<div class="home-page">
		<div class="container">
			home page <br />
			{{ number }}
			<InputAmount v-model="number" />
		</div>
	</div>
</template>

<script>
import InputAmount from "@/components/Inputs/InputAmount";

export default {
	components: {
		InputAmount
	},
	data() {
		return {
			number: 1
		};
	},
	mounted() {
		this.test();
	},
	methods: {
		test() {
			// const array = ["1", "2", 3];

			// const cat = {
			// 	name: "Борис",
			// 	color: "red",
			// 	age: 8
			// };

			// for (const key in cat) {
			// 	console.log(`${key} – ${cat[key]}`);
			// }

			(function () {
				console.log("ss");
			})();

			// for (const el in array) {
			// 	console.log(el);
			// }
		}
	}
};
</script>
