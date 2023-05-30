<template>
	<div class="post-page">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-8 col-lg-9 informer-row-border">
					<div v-if="loading.post">loading</div>
					<div v-else class="item">
						<h1 v-html="post.title.rendered"></h1>
						<figure>
							<div class="img-holder"><img :src="post.jetpack_featured_media_url" alt="..." /></div>
							<figcaption>
								<p v-html="post.content.rendered"></p>
							</figcaption>
						</figure>
					</div>
					<div class="comments">
						<h2 v-if="post.title.rendered" class="comments-title" v-html="`комментарі до ${post.title.rendered}`"></h2>
						<!-- <div v-for="(item, index) in comments" :key="index">
							{{ item }}
						</div> -->

						<Comment v-for="(item, index) in comments" :key="index" :comment="item" />
					</div>
				</div>
				<div class="col-md-4 col-lg-3">site sidebar</div>
			</div>
		</div>
	</div>
</template>

<script>
import Comment from "@/components/Comment";

export default {
	data() {
		return {
			post: {},
			comments: [],
			loading: {
				post: true,
				comment: true
			}
		};
	},
	components: {
		Comment
	},
	async fetch() {
		try {
			await fetch(`https://stalker2-fenomen.info/wp-json/wp/v2/posts/${this.$route.params.slug}`)
				.then((response) => response.json())
				.then((data) => {
					this.post = data;
					// console.log(data);
				});
			await fetch(`https://stalker2-fenomen.info/wp-json/wp/v2/comments?post=${this.$route.params.slug}`)
				.then((response) => response.json())
				.then((data) => {
					this.comments = data;
					// console.log(data);
				});
		} catch (e) {
			console.log(e);
		} finally {
			this.loading.post = false;
			this.loading.comment = false;
		}
	}
};
</script>

<style lang="scss" scoped></style>

<style lang="scss">
.post-page {
	.img-holder {
		margin-bottom: 1.5rem;
	}

	img {
		width: 100%;
		height: auto;
	}
}
</style>
