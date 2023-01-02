<template>
	<header class="header">
		<div class="topbar">
			<div class="container">
				<div class="icon-holder">
					<img src="@/assets/images/icon-01.svg" alt="..." />
				</div>
				<p class="text">Безкоштовна досавка від 1800 грн</p>
				<div class="icon-holder">
					<img src="@/assets/images/icon-01.svg" alt="..." />
				</div>
			</div>
		</div>
		<div class="navbar">
			<div class="container">
				<div class="navbar-toolbar">
					<a href="#" class="navbar-tool">
						<img src="@/assets/images/icon-02.svg" alt="..." />
					</a>
					<a href="#" class="navbar-tool">
						<img src="@/assets/images/icon-03.svg" alt="..." />
					</a>
				</div>
				<a href="#" class="navbar-logo">
					<img src="@/assets/images/icon-04.svg" alt="..." />
				</a>
				<div class="navbar-toolbar">
					<a href="#" class="navbar-tool">
						<img src="@/assets/images/icon-05.svg" alt="..." />
					</a>
					<a href="#" class="navbar-tool cart">
						<img src="@/assets/images/icon-06.svg" alt="..." />
						<span class="cart-sum">0</span>
					</a>
				</div>
			</div>
			<div class="container justify-content-center">
				<nav class="navbar-nav">
					<ul class="nav-menu">
						<li class="menu-item">
							<a href="#" class="menu-link">Омега-3</a>
						</li>
						<li class="menu-item">
							<a href="#" class="menu-link">Вітаміни</a>
						</li>
						<li class="menu-item">
							<a href="#" class="menu-link">Добавки</a>
						</li>
						<li class="menu-item">
							<a href="#" class="menu-link">Доставка</a>
						</li>
						<li class="menu-item">
							<a href="#" class="menu-link">Про нас</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.header {
	.topbar {
		padding-top: 1rem;
		padding-bottom: 1rem;
		font-weight: 500;
		font-size: 2rem;
		color: white;
		line-height: 1.2;
		background: #99afff;

		@include media-breakpoint-down(md) {
			padding-top: 0.5rem;
			padding-bottom: 0.5rem;
			font-size: 1.4rem;
			line-height: 1.4;
		}

		.container {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.text {
			margin-left: 1.3rem;
			margin-right: 1.3rem;
			margin-bottom: 0;
		}
	}

	.navbar {
		padding-top: 3.3rem;

		.navbar-toolbar {
			display: flex;
			align-items: center;

			.navbar-tool {
				&:not(:last-child) {
					margin-right: 3.7rem;

					@include media-breakpoint-down(md) {
						margin-right: 1.6rem;
					}
				}

				&.cart {
					position: relative;

					.cart-sum {
						position: absolute;
						top: 0;
						right: 0;
						transform: translate(50%, -50%);
						width: 2.6rem;
						height: 2.6rem;
						display: flex;
						align-items: center;
						justify-content: center;
						font-weight: 500;
						font-size: 1.4rem;
						letter-spacing: 0.04em;
						color: #1d1d1b;
						background: #f5f352;
						border-radius: 50%;
					}
				}
			}
		}
	}

	.navbar-logo {
		max-width: 19.6rem;

		@include media-breakpoint-down(md) {
			max-width: 15rem;
		}

		img {
			width: 100%;
			height: auto;
		}
	}

	.navbar-nav {
		padding-top: 4.6rem;

		.nav-menu {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			margin: 0;
			padding: 0;
			list-style: none;
			font-size: 2.3rem;
			color: #1d1d1b;

			@include media-breakpoint-down(sm) {
				display: none;
			}

			.menu-item {
				&:not(:last-child) {
					margin-right: 4rem;
				}
			}

			.menu-link {
				text-decoration: none;

				&:hover {
					opacity: 0.7;
				}
			}
		}
	}
}
</style>
