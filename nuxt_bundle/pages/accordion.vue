<template>
	<div class="breakpoints">
		<div class="container">
			<Accordion>
				<AccordionItem v-for="(item, index) in accordions" :title="item.title" :text="item.text" :key="index" />
			</Accordion>
		</div>
	</div>
</template>

<script>
import Accordion from "@/components/Accordion/Accordion";
import AccordionItem from "@/components/Accordion/components/AccordionItem";

export default {
	name: "Breakpoints",
	components: {
		Accordion,
		AccordionItem
	},
	data() {
		return {
			accordions: [
				{
					title: "Digital advertising",
					text: "We ensure that your brand is at the top of the page with a beautiful advertisement when your target group scrolls on Google. And, of course, as cost-effectively as possible. Expand your digital marketing with Digital Advertising."
				},
				{
					title: "Paid socials",
					text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae a alias odit iure corporis ducimus, eveniet, sit quos quae omnis suscipit, hic cumque sed! Repudiandae consectetur suscipit fugiat debitis deserunt!"
				},
				{
					title: "Content marketing",
					text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae a alias odit iure corporis ducimus, eveniet, sit quos quae omnis suscipit, hic cumque sed! Repudiandae consectetur suscipit fugiat debitis deserunt!"
				},
				{
					title: "Growth marketing",
					text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae a alias odit iure corporis ducimus, eveniet, sit quos quae omnis suscipit, hic cumque sed! Repudiandae consectetur suscipit fugiat debitis deserunt!"
				}
			]
		};
	}
};
</script>
