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
							<h1 class="card-title"><span>Омега-3</span> <em>Тріска</em></h1>
							<span class="badge">з вітамінами А і D3</span>
						</div>
						<TabsWrapper>
							<TabItem title="ОПИС">
								<p>Комплекс EPA + DHA кислот і натуральних вітамінів А & D3 для здоров'я твоєї шкіри, волосся, зору, сну, міцних кісток, суглобів та імунітету.</p>
							</TabItem>
							<TabItem title="КОРИСТЬ">
								<ul>
									<li>Покращують стан шкіри: борються з акне та сприяють її регенерації</li>
									<li>Зменшують випадіння волосся, стимулюють його ріст</li>
									<li>Підіймають настрій та полегшують симптоми депресії</li>
									<li>Зміцнюють імунітет: зменшують запальні процеси</li>
									<li>Поліпшують роботу гормонів, серця і ЦНС</li>
									<li>Зменшують болі в суглобах</li>
									<li>Покращують метаболізм і роботу ШКТ</li>
								</ul>
							</TabItem>
							<TabItem title="ІНГРЕДІЄНТИ">
								<table class="ingredients-table">
									<tbody>
										<tr>
											<td>
												<p><strong>Склад:</strong></p>
											</td>
											<td>
												<p>100% риб'ячий жир з печінки тріски, желатин, гліцерин.</p>
											</td>
										</tr>
										<tr>
											<td>
												<p>
													<strong><strong>EPA / DHA</strong></strong>
												</p>
											</td>
											<td>
												<p>170 мг / 205 мг</p>
											</td>
										</tr>
										<tr>
											<td>
												<p><strong>Вітамін-А</strong></p>
											</td>
											<td>
												<p>656 мкг 2187&nbsp;МО</p>
											</td>
										</tr>
										<tr>
											<td>
												<p><strong>Вітамін-D3</strong></p>
											</td>
											<td>
												<p>5.2 мкг 210&nbsp;МО</p>
											</td>
										</tr>
									</tbody>
								</table>
							</TabItem>
							<TabItem title="СПОСІБ ЗАСТОСУВАННЯ">
								<div class="application-method">
									<p>
										Для профілактики, дорослим і дітям від 11 років –&nbsp;<em><strong>4 капсули на день</strong></em
										>, разом із їжею або одразу після.&nbsp;Бажано з іншими жирами <em>для кращого засвоєння</em>.
									</p>
									<p><strong>Курс прийому:</strong>&nbsp;2-3 місяці, після чого зробити перерву 1-2 місяці або перейти на Омега-3 із Тунця.</p>
								</div>
							</TabItem>
						</TabsWrapper>
						<div class="product-details">
							<div class="details-package">
								<div class="img-holder">
									<img src="@/assets/images/icon-010.svg" alt="..." />
								</div>
								<div class="text-block">
									<strong>В упаковці:</strong>
									<span>120 капсул по 500 мг</span>
									<span class="text-muted">1 місяць прийому</span>
								</div>
							</div>
							<div class="product-price">
								<span class="old-price">963 ₴</span>
								<span>489 ₴</span>
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
		<div class="container">
			<div class="delivery">
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

	.tabs {
		margin-bottom: 5.6rem;
	}

	.tab-content {
		font-weight: 400;
		font-size: 1.8rem;
		line-height: 1.55;
		color: #00284f;

		strong {
			font-weight: 700;
			color: #00284f;
		}

		p {
			margin-bottom: 0;

			&:not(:last-child) {
				margin-bottom: 2rem;
			}
		}
	}

	.ingredients-table {
		tr {
			border-bottom: 1px solid #1d1d1b;

			td {
				width: 50%;
				padding-bottom: 0.7rem;
			}

			&:not(:first-child) {
				td {
					padding-top: 0.7rem;
				}
			}
		}

		p {
			margin-bottom: 0;
			color: #335371;
		}
	}

	.product-details {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 6.4rem;

		.details-package {
			display: flex;
			align-items: center;

			.img-holder {
				margin-right: 3.2rem;
				max-width: 4.3rem;

				img {
					width: 100%;
					height: auto;
				}
			}

			.text-block {
				display: flex;
				flex-direction: column;
				font-size: 1.8rem;
				line-height: 1.27;
				color: #00284f;
			}

			.text-muted {
				color: rgba(#00284f, 0.5);
			}
		}
	}

	.product-price {
		display: flex;
		align-items: center;
		font-weight: 700;
		font-size: 4rem;
		line-height: 1.21;
		color: #00284f;

		span {
			&:not(:first-child) {
				margin-left: 2.4rem;
			}

			&.old-price {
				position: relative;
				font-size: 2.8rem;
				line-height: 1;
				color: rgba(0, 40, 79, 0.3);

				&::before {
					content: "";
					display: block;
					position: absolute;
					left: 0;
					top: 43%;
					width: 100%;
					height: 0;
					border-bottom: 0.2rem solid #00284f;
					transform: rotate(11deg);
				}
			}
		}
	}

	.delivery {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2rem 5.6rem;
		background: linear-gradient(270deg, rgba(255, 255, 255, 0.81) 0%, rgba(255, 255, 255, 0.54) 100%);
		border-radius: 1.5rem;

		.delivery-item {
			display: flex;
			align-items: center;

			.icon-holder {
				margin-right: 2.4rem;
			}

			.text {
				max-width: 27.6rem;
				margin-bottom: 0;
			}
		}
	}
}
</style>
