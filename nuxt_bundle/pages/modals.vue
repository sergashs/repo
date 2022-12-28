<template>
	<div class="modals-page">
		<div class="container">
			<button class="btn btn-primary" @click="openModal('modal')">open modal</button>
		</div>

		<modal ref="modal" class="contact-from">
			<template #modal-body>
				<div class="modal-form">
					<h3 class="h3">modal title</h3>
					<div class="text-holder">
						<p>text in modal</p>
					</div>
				</div>
			</template>
		</modal>
	</div>
</template>

<script>
import Modal from "@/components/Modal";

export default {
	components: {
		Modal
	},
	methods: {
		openModal(modalName) {
			this.$refs[modalName].handleOpen();
		}
		// closeModal(modalName) {
		// 	this.$refs[modalName].handleClose();
		// }
	}
};
</script>
