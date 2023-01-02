<template>
	<div class="holder">
		<button @click="minus">-</button>
		<div>{{ date }}</div>
		<button @click="plus">+</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dates: ["2021-12-01", "2021-12-02", "2021-12-03", "2021-12-04", "2021-12-05", "2021-12-06", "2021-12-07", "2021-12-08", "2021-12-09", "2021-12-10", "2021-12-11", "2021-12-12", "2021-12-13"],
			filteredDates: [],
			date: {
				month: new Date().getMonth() + 1,
				year: new Date().getFullYear()
			},
			step: 0
		};
	},
	methods: {
		plus() {
			if (this.date.month + "-" + this.date.year == new Date().getMonth() + 1 + "-" + new Date().getFullYear()) {
				return;
			} else {
				if (this.date.month == 12) {
					this.date.year++;
					this.date.month = 0;
				}

				this.date.month++;
			}
		},
		minus() {
			if (this.date.month == 1) {
				this.date.year--;

				this.date.month = 13;
			}

			this.date.month--;
		},
		range(arr, nth) {
			return arr.filter((e, i) => i % nth === nth - 1);
		}
	},
	mounted() {
		console.log(this.range(this.dates, 2));
	}
};
</script>

<style lang="scss" scoped>
.holder {
	display: flex;
	align-items: center;

	button {
		margin: 0.5rem;
	}
}
</style>
