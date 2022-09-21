<template>
	<div class="search-holder" @blur="showHideList(false)" ref="searchHolder">
		<input type="email" class="form-control" @focus="showHideList(true)" @input="search($event)" v-model="inputValue" placeholder="search in todos list" />
		<span v-if="inputValue" class="close-btn" @click="clearInputValue">
			<svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" /></svg>
		</span>
		<div v-if="showList" class="list-holder">
			<ul v-if="inputValue" class="list-group" ref="list">
				<li v-for="(item, index) in filteredData" :key="index" class="list-group-item" :class="index === selectedIndex ? 'selected' : ''" @click="selectValue(item.title)">#{{ index }} {{ item.title }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			data: [],
			loading: false,
			showList: false,
			filteredData: [],
			inputValue: "",
			selectedIndex: 0
		};
	},
	created() {
		this.getData();
	},
	mounted() {
		window.addEventListener("keydown", this.handleKeyDown);
		this.selectOnEnter();
	},
	unmounted() {
		window.removeEventListener("keydown", this.handleKeyDown);
	},
	methods: {
		async getData() {
			axios
				.get("https://jsonplaceholder.typicode.com/todos/")
				.then((response) => (this.data = response.data))
				.catch(function (error) {
					if (error.response) {
						// console.log(error.response.data);
						console.log(error.response.status);
						// console.log(error.response.headers);
					} else if (error.request) {
						console.log(error.request);
					} else {
						console.log("Error", error.message);
					}
					// console.log(error.config);
				});
		},
		showHideList(boolean) {
			this.showList = boolean;
		},
		search() {
			this.filteredData = this.data.filter((item) => {
				return item.title.toLowerCase().indexOf(this.inputValue.toLowerCase()) > -1;
			});
		},
		selectValue(value) {
			this.inputValue = value;
			this.showList = false;
			this.selectedIndex = 0;
		},
		clearInputValue() {
			this.inputValue = "";
			this.selectedIndex = 0;
			this.showList = false;
		},
		select(itemIndex) {
			this.selectedIndex = itemIndex;
		},
		handleKeyDown(event) {
			switch (event.keyCode) {
				case 38:
					if (this.selectedIndex > 0) {
						this.select(this.selectedIndex - 1);

						this.$refs.list.children[this.selectedIndex].scrollIntoView({ behavior: "smooth" });
					}
					event.preventDefault();
					break;

				case 40:
					if (this.selectedIndex < this.filteredData.length - 1) {
						this.select(this.selectedIndex + 1);

						this.$refs.list.children[this.selectedIndex].scrollIntoView({ behavior: "smooth" });
					}
					event.preventDefault();
					break;
			}
		},
		selectOnEnter() {
			window.addEventListener("keydown", (e) => {
				if (e.code === "Enter") {
					console.log("e");
					this.inputValue = this.filteredData[this.selectedIndex].title;
					this.showList = false;
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.search-holder {
	position: relative;

	.form-control {
		padding: 1rem 2rem;
		font-size: 1.8rem;
		color: rgba(white, 0.5);
		background: #252c36;
		border-radius: 0.5rem;
		border: none;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;

		&:focus {
			box-shadow: none;
		}

		&::placeholder {
			color: rgba(white, 0.3);
		}
	}

	.list-holder {
		position: absolute;
		top: 100%;
		left: 0;
	}

	.list-group {
		height: 30rem;
		overflow: auto;
		font-size: 1.8rem;

		.list-group-item {
			color: rgba(white, 0.5);
			background: #252c36;
			transition: 0.3s;
			border: solid 0.1rem #303641;
			cursor: pointer;

			&:hover,
			&.selected {
				background: rgba(white, 0.1);
			}
		}
	}

	.close-btn {
		position: absolute;
		top: 50%;
		right: 1rem;
		width: 1.5rem;
		display: flex;
		transform: translateY(-50%);
		cursor: pointer;

		svg {
			width: 100%;
			height: auto;
		}
	}
}
</style>
