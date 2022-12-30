<script>
export default {
	setup() {
		const slides = [
			{
				id: 1,
				img: "img-01.png"
			},
			{
				id: 2,
				img: "img-02.png"
			},
			{
				id: 3,
				img: "img-03.png"
			},
			{
				id: 4,
				img: "img-04.png"
			},
			{
				id: 5,
				img: "img-05.png"
			}
		];
		//Whatever code

		return { slides };
	}
};
</script>

<template>
	<div class="product-page">
		<div class="card">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="title-holder">
							<h1 class="card-title"><span>Омега-3</span> Тріска</h1>
							<span class="badge">з вітамінами А і D3</span>
						</div>
						<TabsWrapper>
							<TabItem title="Tab 1">Content from Tab 1</TabItem>
							<TabItem title="Tab 2">Content from Tab 2 Lorem ipsum dolor sit amet.</TabItem>
							<TabItem title="Tab 3">Content from Tab 3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, ipsa.</TabItem>
							<TabItem title="Tab 4">Content from Tab 4 Lorem ipsum dolor sit amet.</TabItem>
							<TabItem title="Tab 5">Content from Tab 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ab minima. Facere mollitia tempora soluta, commodi beatae sit. Distinctio.</TabItem>
							<TabItem title="Tab 6">Content from Tab 6</TabItem>
						</TabsWrapper>
						<div class="product-details">
							<div class="details-text"></div>
							<div class="price with-promo">
								<div class="default-price">963₴</div>
								<div class="promo-price">489 ₴</div>
							</div>
						</div>
						<div class="card-footer">
							<div class="product-quantity"></div>
							<Button>button</Button>
						</div>
					</div>
					<div class="col-md-6">
						<Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]" :navigation="true" :slides-per-view="1" :loop="false" :autoplay="false">
							<SwiperSlide v-for="slide in slides" :key="slide.id">
								<div class="img-holder">
									<img :src="`./assets/images/${slide.img}`" alt="..." />
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</div>
		<div class="delivery">
			<div class="container">
				<div class="delivery-item">
					<div class="icon-holder">
						<img src="@/assets/images/icon-07.svg" alt="..." />
					</div>
					<p class="text">Безкоштовна доставка від 1800 грн</p>
				</div>
				<div class="delivery-item">
					<div class="icon-holder">
						<img src="@/assets/images/icon-08.svg" alt="..." />
					</div>
					<p class="text">Відправки в день оформлення замовлення до 16:00</p>
				</div>
				<div class="delivery-item">
					<div class="icon-holder">
						<img src="@/assets/images/icon-09.svg" alt="..." />
					</div>
					<p class="text">Гарантія повернення грошових коштів</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.product-page {
	.card {
		padding-top: 9.6rem;
		background: transparent;
		border: none;
	}
}
</style>
