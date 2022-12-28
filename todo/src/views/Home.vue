<template>
	<div class="home-page">
		<default>
			<intro-section class="h1-sm-width">
				<template v-slot:title>
					Welcome to <br />
					Business Analytics Online
				</template>
			</intro-section>
			<div class="content">
				<div class="container">
					<div class="left">
						<div class="text-holder">
							<p><strong>Business Analytics</strong> — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's</p>
							<ul>
								<li>
									<strong>Interactive Reporting</strong>
									<p>In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.</p>
								</li>
								<li>
									<strong>Automated data updates</strong>
									<p>The application automatically updates and structures the data in just 60 seconds, saving you time and money.</p>
								</li>
								<li>
									<strong>Data Security</strong>
									<p>The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.</p>
								</li>
							</ul>
						</div>
					</div>
					<div class="right">
						<LoginForm />
					</div>
				</div>
			</div>
		</default>
	</div>
</template>

<script>
import IntroSection from "@/components/IntroSection";
import Default from "@/layouts/default";
import LoginForm from "@/components/LoginForm";

export default {
	name: "Home",
	components: {
		IntroSection,
		Default,
		LoginForm
	}
};
</script>

<style lang="scss" scoped>
.home-page {
	.content {
		padding-top: 4rem;
		padding-bottom: 4rem;

		.container {
			display: flex;

			@include screen($md, "max") {
				flex-direction: column;
			}

			.left {
				@include screen($md, "min") {
					max-width: 68.7rem;
					padding-right: 2.3rem;
				}

				@include screen($md, "max") {
					margin-bottom: 4rem;
				}
			}

			.right,
			.left {
				@include screen($md, "min") {
					flex: 1;
				}
			}

			.right {
				@include screen($md, "min") {
					max-width: 48.1rem;
				}
			}
		}

		.text-holder {
			font-size: 1.6rem;
			line-height: 1.5;

			p {
				margin-bottom: 1.5rem;
			}

			strong {
				font-weight: 500;
			}

			ul {
				margin: 0;
				padding: 0;
				list-style: none;
				font-size: 1.4rem;

				li {
					padding-left: 3.2rem;

					strong {
						position: relative;
						display: block;
						margin-bottom: 1rem;
						font-size: 1.6rem;

						&::before {
							content: "";
							position: absolute;
							top: 50%;
							transform: translateY(-50%);
							left: -3.2rem;
							width: 2.3rem;
							height: 1.7rem;
							background-image: url("data:image/svg+xml,%3Csvg width='23' height='17' viewBox='0 0 23 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.9584 0L23 2.99416L8.77173 17L0 8.36558L3.04162 5.37142L8.77173 11.0118L19.9584 0Z' fill='%230076C0'/%3E%3C/svg%3E");
						}
					}
				}
			}
		}

		.login-form {
			position: relative;
			z-index: 5;

			@include screen($md, "min") {
				margin-top: -22rem;
			}
		}
	}
}
</style>
