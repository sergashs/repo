<template>
	<div class="section-reviews">
		<div class="container">
			<div class="review">
				<div class="user-avatar">
					<img src="@/assets/images/img-04.jpg" alt="#" />
				</div>
				<div class="user-text">
					<p>“splendid work, impeccable.”</p>
				</div>
				<h3 class="user-name">Mary Toronto</h3>
				<span class="user-position">architect & designer, NY</span>
				<div class="btn-holder">
					<a href="#" class="btn btn-arrow">
						what our customers say
						<span class="icon-holder">
							<img src="@/assets/images/icon-01.svg" alt="#" />
						</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SectionReviews"
};
</script>

<style lang="scss">
@import "@/components/SectionReviews/SectionReviews.scss";
</style>
