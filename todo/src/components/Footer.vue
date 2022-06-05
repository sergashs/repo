<template>
	<footer class="footer">
		<div class="container">
			<div class="top">
				<div class="left">
					<strong class="logo">
						<router-link to="/">
							<img src="@/assets/images/icon-logo.svg" alt="icon logo" />
						</router-link>
					</strong>
				</div>
				<div class="right">
					<nav>
						<ul>
							<li><a href="#">Terms & Conditions</a></li>
							<li><a href="#">Privacy</a></li>
							<li><a href="#">Notice at Collection</a></li>
							<li><a href="#">CA Privacy Hub</a></li>
							<li><a href="#">Contact Us </a></li>
							<li><a href="#">Sitemap</a></li>
						</ul>
					</nav>
				</div>
			</div>
			<div class="text-holder">
				<p>Copyright &copy; 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.</p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer {
	padding: 3rem 0;
	color: $white;
	background: $mine-shaft;

	@include screen($lg, "max") {
		padding: 2rem 0;
	}

	.logo {
		a {
			display: inline-flex;
			max-width: 5.5rem;

			@include screen($lg, "max") {
				margin-bottom: 2.5rem;
			}

			img {
				width: 100%;
				height: auto;
			}
		}
	}

	.top {
		margin-bottom: 1.5rem;
		border-bottom: solid 0.1rem $white;

		@include screen($lg, "min") {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		@include screen($lg, "min") {
			padding-bottom: 1.5rem;
			margin-bottom: 3rem;
		}
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		font-weight: 500;
		font-size: 1.6rem;

		@include screen($md, "min") {
			display: flex;
			flex-wrap: wrap;
		}

		@include screen($md, "max") {
			font-size: 1.4rem;
		}

		li {
			&:not(:last-child) {
				margin-right: 2rem;
			}

			a {
				display: inline-flex;
				position: relative;
				margin-bottom: 1.5rem;

				&::after {
					content: "";
					position: absolute;
					bottom: -0.2rem;
					left: 0;
					width: 0;
					height: 0;
					border-bottom: solid 0.1rem;
					transition: $transition;
				}

				&:hover {
					&::after {
						width: 100%;
					}
				}
			}
		}
	}

	.text-holder {
		font-weight: 500;
		font-size: 1.2rem;
		line-height: 1.5;

		p {
			margin-bottom: 0;
		}
	}
}
</style>
