<template>
	<div class="home">
		<div class="container">
			<div class="search-bar">
				<InputText type="text" v-model="searchValue" />
				<Button label="Search" icon="pi pi-search" :loading="isLoading" @click="search" />
			</div>

			<div class="search-results">
				<div class="row">
					<div class="col col-4" v-for="item in searchResults" :key="item.key">
						<Card>
							<template #header>
								<h3 class="card-title">{{ item.title }}</h3>
							</template>
							<template #content>
								{{ item.title }}
								{{ item.author_name }}
							</template>
						</Card>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ApiSearch from "@/api/search";

export default {
	data() {
		return {
			searchValue: "",
			isLoading: false,
			searchResults: null
		};
	},
	methods: {
		search() {
			this.isLoading = true;
			ApiSearch.searchByTitle(this.searchValue)
				.then((response) => {
					if (response) {
						this.isLoading = false;
						this.searchResults = response.docs;
						console.log(response);
					}
				})
				.catch(() => {
					this.isLoading = false;
					console.log("error");
				});
		}
	}
};
</script>

<style lang="scss" scoped>
.home {
	.search-bar {
		display: flex;
		justify-content: center;
		margin-bottom: 30px;
		padding-top: 100px;
		padding-bottom: 30px;
		border-bottom: solid 1px silver;

		.p-inputtext {
			width: 100%;
			max-width: 300px;
			margin-right: 10px;
		}
	}

	.search-results {
		.row {
			> .col {
				margin-bottom: 20px;
			}
		}

		.p-card {
			height: 100%;
			padding: 20px;

			.card-title {
				font-size: 20px;
			}
		}
	}
}
</style>
