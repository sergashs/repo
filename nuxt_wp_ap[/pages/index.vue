<template>
	<div class="home-page">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-8 col-lg-9 informer-row-border">
					<div class="informer-last-news">
						<div v-if="loading">loading</div>
						<div v-else v-for="(item, index) in posts" :key="index" class="item">
							<h3>
								<a :href="item.id" v-html="item.title.rendered"></a>
							</h3>
							<figure>
								<div class="img-holder"><img :src="item.jetpack_featured_media_url" alt="..." /></div>
								<figcaption>
									<p v-html="item.excerpt.rendered"></p>
									<a :href="item.link" class="more-link"
										>Читати повністю<span class="screen-reader-text"> {{ item.title.rendered }}</span></a
									>
								</figcaption>
							</figure>
							<ul class="meta-info">
								<li><a href="https://stalker2-fenomen.info/category/news/news_gsc/">GSC Game World</a></li>
								<li>дата додавання 19.01.2023</li>
								<li>
									<span class="byline">
										додав <span class="author vcard"><a class="url fn n" href="https://stalker2-fenomen.info/author/7sevenugmail-com/">Fenomen</a></span></span
									>
								</li>
								<li>
									<div class="post-views content-post post-4557 entry-meta"><span class="post-views-icon dashicons dashicons-chart-bar"></span> <span class="post-views-label">Переглядів</span> <span class="post-views-count">436</span></div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-lg-3">site sidebar</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			posts: [],
			loading: true
		};
	},

	async fetch() {
		try {
			await fetch("https://stalker2-fenomen.info/wp-json/wp/v2/posts")
				.then((response) => response.json())
				.then((data) => {
					this.posts = data;
					console.log(data);
				});
		} catch (e) {
			console.log(e);
		} finally {
			this.loading = false;
		}
	}

	// methods: {
	// 	async getPosts() {
	// 		try {
	// 			await fetch("https://stalker2-fenomen.info/wp-json/wp/v2/posts")
	// 				.then((response) => response.json())
	// 				.then((data) => {
	// 					this.posts = data;
	// 					console.log(data);
	// 				});
	// 		} catch (e) {
	// 			console.log(e);
	// 		} finally {
	// 			this.loading = false;
	// 		}
	// 	}
	// },
	// created() {
	// 	this.getPosts();
	// }
};
</script>

<style lang="scss" scoped>
.informer-last-news {
	.item {
		margin-bottom: 2.5rem;

		h3 {
			font-family: $fira-sans-condensed;
			margin-bottom: 1.5rem;
			font-size: 2rem;

			a {
				font-weight: 500;
				color: $mercury;
			}
		}

		figure {
			display: flex;
			margin-bottom: 2rem;

			@include media-breakpoint-down(lg) {
				flex-direction: column;
			}

			.img-holder {
				position: relative;
				width: 100%;
				min-height: 170px;

				@include media-breakpoint-up(lg) {
					max-width: 30rem;
					margin-right: 2rem;
				}

				@include media-breakpoint-down(lg) {
					margin-bottom: 2rem;
				}

				img {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			figcaption {
				flex: 1;
				color: $cloudy;
			}
		}

		.more-link {
			font-style: italic;
		}
	}

	.meta-info {
		padding: 1.5rem 0 0 0;
		margin: 0;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		border-top: 0.1rem solid $tuatara;

		li {
			font-size: 1.3rem;
			color: darken($cloudy, 8);
			margin-right: 3rem;
			line-height: 1;

			@include media-breakpoint-down(md) {
				margin-bottom: 1rem;
			}

			i {
				margin-right: 0.5rem;
			}
		}
	}
}
</style>
