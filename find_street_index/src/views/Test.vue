<template>
	<div>
		{{ sortedArray.length }}
		sortedArray : {{ sortedArray }} <br />
		{{ allottedArray }} <br />
		{{ activeSortedIndex }}

		<button @click="setSortedArray('prev')">prev</button>
		<button @click="setSortedArray('next')">next</button>

		<div class="holder">
			<button @click="minus">-</button>
			<div>{{ date }}</div>
			<button @click="plus">+</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			sortedArray: [],
			activeSortedIndex: 0,
			allottedArray: [],
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
		sortArray(arr) {
			let numItems = 5;
			this.sortedArray = arr.reduce((acc, curr, i) => {
				if (!(i % numItems)) {
					acc.push(arr.slice(i, i + numItems));
				}
				return acc;
			}, []);
		},
		setSortedArray(direction) {
			const arrLength = this.sortedArray.length - 1;

			if (direction == "next") {
				if (this.activeSortedIndex < arrLength) {
					this.activeSortedIndex++;
				}
			}

			if (direction == "prev") {
				if (!this.activeSortedIndex <= 0) {
					this.activeSortedIndex--;
				}
			}

			this.allottedArray = this.sortedArray[this.activeSortedIndex];
		}
	},
	mounted() {
		this.sortArray(this.dates);
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
