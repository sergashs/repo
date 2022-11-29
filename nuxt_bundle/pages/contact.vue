<template>
	<div class="contact-page">
		<div class="container">
			<ContactForm />
		</div>
	</div>
</template>

<script>
import ContactForm from "@/components/ContactForm";

export default {
	name: "Contact",
	components: {
		ContactForm
	}
};
</script>
