<template>
	<div class="posts-page">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-9">
					<div class="posts">
						<h2 class="h2 mb-3 pb-3">Posts</h2>
						<div class="row">
							<div class="col-md-6" v-for="(item, index) in data" :key="index">
								<Card :data="{ title: item.title, description: item.description, img_url: item.img_url }" />
							</div>
						</div>
					</div>
					<AddPostForm @onCreatePost="getCards()" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import AddPostForm from "@/components/AddPostForm";
import Card from "@/components/Card";

export default {
	components: {
		AddPostForm,
		Card
	},
	data() {
		return {
			data: []
		};
	},
	mounted() {
		this.getCards();
	},
	methods: {
		getCards() {
			axios.get(`https://posts-3103b-default-rtdb.firebaseio.com/posts.json?`).then((response) => {
				this.data = response.data;
				console.log(response);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.posts-page {
	.posts {
		padding-top: 5rem;

		.row {
			& > [class^="col"] {
				margin-bottom: 2rem;
			}
		}
	}
}
</style>
