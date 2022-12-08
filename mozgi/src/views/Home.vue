<template>
	<div class="home-page">
		<Header />
		<Title>
			<TextCircle text="showreel showreel showreel showreel" />
		</Title>
		<div class="marquees-holder">
			<Marquee :settings="{ duration: 15, repeat: 5 }" text="FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY" />
			<Marquee :settings="{ duration: 15, repeat: 5 }" text="FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY" />
		</div>
		<Link :link="{ title: 'who?', to: '/test' }" class="link-1" />
		<Link :link="{ title: 'where?', to: '/test' }" class="link-2" />
		<Link :link="{ title: 'what?', to: '/test' }" class="link-3" />
	</div>
</template>

<script>
import Header from "@/components/Header";
import Title from "@/components/Title";
import Marquee from "@/components/Marquee";
import Link from "@/components/Link";
import TextCircle from "@/components/TextCircle";

export default {
	components: {
		Title,
		Marquee,
		Link,
		Header,
		TextCircle
	}
};
</script>

<style lang="scss" scoped>
.home-page {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	min-height: calc(var(--vh, 1vh) * 100);
	overflow: hidden;

	@media (min-width: 1024px) {
		padding: 0 60px;
	}

	.title {
		position: relative;
		z-index: 2;
	}

	.marquees-holder {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		.marquee {
			&:first-child {
				transform: rotate(150deg);

				@media (max-width: 768px) {
					padding-top: 30px;
					transform: rotate(128deg);
				}

				@media (max-width: 575px) {
					padding-top: 50px;
					transform: rotate(111deg);
				}
			}

			&:last-child {
				transform: rotate(-30deg);

				@media (max-width: 768px) {
					transform: rotate(308deg);
				}

				@media (max-width: 575px) {
					transform: rotate(291deg);
				}
			}
		}
	}

	.link {
		position: absolute;

		@media (max-width: 768px) {
			display: none;
		}

		&.link-1 {
			left: 50%;
			bottom: 19px;
			transform: translateX(-50%);
		}

		&.link-2,
		&.link-3 {
			top: 50%;
			transform: translateY(-50%);
		}

		&.link-2 {
			left: 19px;
			transform-origin: 0 0;
			transform: rotate(-90deg);
		}

		&.link-3 {
			right: 39px;
			transform: rotate(90deg) translate(-35px, 0);
			transform-origin: right bottom;
		}
	}

	.text-circle {
		position: absolute;
		right: 28%;
		bottom: -5%;
		z-index: 3;

		@media (max-width: 575px) {
			right: 18%;
			bottom: -10%;
		}
	}
}
</style>
