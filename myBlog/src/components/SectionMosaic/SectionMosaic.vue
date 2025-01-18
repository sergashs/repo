<template>
	<div class="section-mosaic">
		<div class="container-fluid">
			<div class="inner-holder">
				<img src="@/assets/images/illustration-01.jpg" alt="illustration-01" />
				<div class="row g-0">
					<div class="col-6 col-lg-3 col-xl-2">
						<div class="illustration-block"></div>
					</div>
					<div class="col-3 col-xl-2 d-none d-lg-flex">
						<div class="illustration-block"></div>
					</div>
					<div class="col-3 col-xl-2 d-none d-lg-flex">
						<div class="illustration-block"></div>
					</div>
					<div class="col-6 col-lg-3 col-xl-2">
						<div class="illustration-block"></div>
					</div>
					<div class="col-3 col-xl-2 d-none d-xl-flex">
						<div class="illustration-block"></div>
					</div>
					<div class="col-3 col-xl-2 d-none d-xl-flex">
						<div class="illustration-block"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SectionMosaic"
};
</script>

<style lang="scss">
@import "@/components/SectionMosaic/SectionMosaic.scss";
</style>
