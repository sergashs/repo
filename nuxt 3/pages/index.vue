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
							<TabItem title="ОПИС">ОПИС</TabItem>
							<TabItem title="КОРИСТЬ">КОРИСТЬ</TabItem>
							<TabItem title="ІНГРЕДІЄНТИ">ІНГРЕДІЄНТИ</TabItem>
							<TabItem title="СПОСІБ ЗАСТОСУВАННЯ">СПОСІБ ЗАСТОСУВАННЯ</TabItem>
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
						<Swiper :modules="[SwiperNavigation]" :navigation="true" :slides-per-view="1" :loop="false" :autoplay="false">
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

		.title-holder {
			display: flex;
			align-items: center;
			margin-bottom: 3.6rem;

			.badge {
				width: 100%;
				max-width: 29rem;
				font-weight: 500;
				font-size: 2.2rem;
				color: #00284f;
				padding: 0.8rem 2rem;
				background: #ffffff;
				border-radius: 5rem;
			}
		}

		.card-title {
			margin-right: 2.4rem;
			font-size: 4rem;
			line-height: 1.42;

			span {
				font-weight: 700;
			}
		}
	}
}
</style>
