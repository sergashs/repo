<template>
	<li class="accordion-item" :class="{ active: visible }">
		<button class="item-header" @click="open">
			<h4 class="item-title">{{ title }}</h4>
			<span class="accordion-trigger"></span>
		</button>
		<transition name="accordion" @enter="start" @after-enter="end" @before-leave="start" @after-leave="end">
			<div v-show="visible" class="item-body">
				<p>{{ text }}</p>
			</div>
		</transition>
	</li>
</template>

<script>
export default {
	title: "Accordion",
	props: {
		title: {
			type: String,
			default: ""
		},
		text: {
			type: String,
			default: ""
		}
	},
	inject: ["Accordion"],
	data() {
		return {
			index: null
		};
	},
	computed: {
		visible() {
			return this.index === this.Accordion.active;
		}
	},
	methods: {
		open() {
			if (this.visible) {
				this.Accordion.active = null;
			} else {
				this.Accordion.active = this.index;
			}
		},
		start(el) {
			el.style.height = el.scrollHeight + "px";
		},
		end(el) {
			el.style.height = "";
		}
	},
	created() {
		this.index = this.Accordion.count++;
	}
};
</script>

<style lang="scss" scoped>
.accordion-item {
	border-top: solid 0.1rem;
	transition: 0.3s linear;

	.item-header {
		position: relative;
		width: 100%;
		padding: 0;
		background: transparent;
		border: none;
		color: inherit;
	}

	.accordion-trigger {
		position: absolute;
		top: 50%;
		right: 2.2rem;
		transform: translateY(-50%);
		width: 2rem;
		height: 2rem;

		&::before {
			content: "";
			position: absolute;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
			width: 100%;
			border-bottom: solid 0.2rem;
		}

		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			height: 100%;
			border-right: solid 0.2rem;
		}
	}

	.item-title {
		padding: 2.4rem 0;
		font-weight: 600;
		font-size: 3.2rem;
		text-align: left;
	}

	.item-body {
		max-width: 58rem;
		font-size: 2rem;
		line-height: 1.6;

		p {
			margin-bottom: 0;
		}
	}

	.accordion-enter-active,
	.accordion-leave-active {
		will-change: height, opacity;
		transition: height 0.3s ease, opacity 0.3s ease;
		overflow: hidden;
	}

	.accordion-enter,
	.accordion-leave-to {
		height: 0 !important;
		opacity: 0;
	}

	&.active {
		padding-bottom: 4rem;

		.accordion-trigger {
			&::after {
				opacity: 0;
			}
		}
	}
}
</style>
