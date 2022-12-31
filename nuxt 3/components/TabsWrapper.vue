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
			<li v-for="title in tabTitles" :key="title" class="list-item" :class="{ selected: selectedTitle === title }" @click="selectedTitle = title">
				{{ title }}
			</li>
		</ul>
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.tabs {
	.tabs-list {
		margin: 0 0 2.2rem 0;
		padding: 0;
		list-style: none;
		display: inline-flex;
		font-weight: 700;
		font-size: 1.7rem;
		color: rgba(#00284f, 0.4);
		border-bottom: 0.2rem solid rgba(0, 40, 79, 0.3);

		.list-item {
			position: relative;
			padding-bottom: 0.8rem;
			text-transform: uppercase;
			cursor: pointer;
			transition: 0.3s;

			&:not(:last-child) {
				margin-right: 4rem;
			}

			&::after {
				position: absolute;
				content: "";
				left: 0;
				bottom: -0.2rem;
				width: 100%;
				opacity: 0;
				transition: 0.3s;
				border-bottom: 0.2rem solid rgba(0, 40, 79, 1);
			}

			&.selected {
				color: #00284f;

				&::after {
					opacity: 1;
				}
			}
		}
	}
}
</style>
