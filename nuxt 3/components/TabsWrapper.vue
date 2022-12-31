<script setup>
import { useSlots, ref, provide } from "vue";
const slots = useSlots();
const tabTitles = ref(slots.default().map((tab) => tab.props.title));
const selectedTitle = ref(tabTitles.value[0]);
provide("selectedTitle", selectedTitle);
</script>

<template>
	<div class="tabs">
		<ul class="tabs-list">
			<li v-for="title in tabTitles" :key="title" class="tabs-item" :class="{ selected: selectedTitle === title }" @click="selectedTitle = title">
				{{ title }}
			</li>
		</ul>

		<slot />
	</div>
</template>

<style lang="scss" scoped>
.tabs {
	.tabs-list {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		border-bottom: 0.2rem solid rgba(0, 40, 79, 0.3);

		.tabs-item {
			position: relative;
			padding-bottom: 0.8rem;
			font-weight: 700;
			font-size: 1.7rem;
			color: rgba(#00284f, 0.4);
			text-transform: uppercase;
			cursor: pointer;
			transition: 0.3s linear;

			&:not(:last-child) {
				margin-right: 4rem;
			}

			&::after {
				position: absolute;
				content: "";
				left: 0;
				bottom: -0.2rem;
				width: 100%;
			}

			&.selected {
				color: #00284f;

				&::after {
					border-bottom: 0.2rem solid rgba(0, 40, 79, 1);
				}
			}
		}
	}
}
</style>
