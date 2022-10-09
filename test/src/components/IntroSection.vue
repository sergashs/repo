<template>
	<div class="intro-section">
		<h1 class="h1">
			{{ title }}
		</h1>
		<div class="circle"></div>
		<Marquee :duration="30" text="FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY" />
	</div>
</template>

<script>
import Marquee from "@/components/Marquee";

export default {
	components: {
		Marquee
	},
	props: {
		title: {
			type: String,
			default: ""
		}
	},
	mounted() {
		this.initTextAnim();
	},
	methods: {
		initTextAnim() {
			var title = document.querySelector(".h1");
			document.onmousemove = function (event) {
				let x = (event.clientX * 5) / window.innerWidth + "%";
				let y = (event.clientY * 5) / window.innerHeight + "%";

				title.style.transform = `translate(${x},${y})`;
			};
		}
	}
};
</script>

<style lang="scss" scoped>
.intro-section {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	min-height: calc(var(--vh, 1vh) * 100);
	overflow: hidden;

	.h1 {
		position: relative;
		max-width: 102.3rem;
		font-size: 8.2rem;
		text-align: center;
		line-height: 1.09;
		text-transform: uppercase;
		color: #373737;
		z-index: 3;
	}

	.circle {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 578px;
		height: 578px;
		background: #ffcb46;
		filter: blur(38px);
		border-radius: 50%;
		z-index: 1;
	}

	.marquee-section {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%) rotate(332deg);
		width: 120%;
	}
}
</style>
