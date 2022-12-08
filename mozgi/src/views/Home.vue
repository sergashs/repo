<template>
	<div class="home-page">
		<Title> </Title>
		<div class="marquees-holder">
			<Marquee :settings="{ duration: 15, repeat: 5 }" text="FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY" />
			<Marquee :settings="{ duration: 15, repeat: 5 }" text="FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY" />
		</div>
	</div>
</template>

<script>
import Title from "@/components/Title";
import Marquee from "@/components/Marquee";

export default {
	components: {
		Title,
		Marquee
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
			}

			&:last-child {
				transform: rotate(-30deg);
			}
		}
	}
}
</style>
