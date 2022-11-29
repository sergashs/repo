<template>
	<div class="page">
		<div class="container">
			<ul>
				<li v-for="(item, index) in 5" :key="index">
					<a :anchor-link="'section-' + index" href="#">scroll to section {{ index }}</a>
				</li>
			</ul>

			<section :anchor-section="'section-' + index" v-for="(item, index) in 5" :key="index">
				<h2 class="h2">section {{ index }}</h2>
				<div class="text-holder">
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident at rem ad libero natus? Laborum alias consequatur sit quisquam praesentium minima ipsa dignissimos iusto voluptatibus tenetur, quas qui cum ab. Quasi nostrum nobis rem harum at vero quo odit nisi animi porro dolor laborum delectus adipisci, culpa velit sed. Error ipsa hic exercitationem voluptatibus ipsam aliquam qui. Iste, unde iure. Modi accusantium assumenda, soluta, ducimus neque dolore dignissimos aliquam dolor, natus praesentium distinctio sapiente. Soluta, quam aliquid saepe, ipsa, voluptatibus esse eius nostrum inventore minima distinctio quos nesciunt eaque natus? Magnam eaque eum minima repellat. Minima error hic numquam est. Aperiam alias modi soluta sint aspernatur ab, libero aliquid dicta quisquam, magnam suscipit, itaque culpa quo doloribus explicabo iusto quis. Similique quo sint,
						minima incidunt magnam ut praesentium deserunt vitae ipsa aspernatur nobis! Distinctio asperiores nulla, doloremque sint maxime repellendus ab, quia porro qui facilis numquam aperiam deserunt, illo repellat!
					</p>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		window.addEventListener("scroll", this.handleScroll);
		this.handleScroll();
		this.scrollTo();
	},

	methods: {
		openModal(modalName, modalType) {
			this.$refs[modalName].handleOpen();
			this.modalType = modalType;
		},
		closeModal(modalName) {
			this.$refs[modalName].handleClose();
		},

		scrollTo() {
			const links = document.querySelectorAll("[anchor-link]");

			if (links) {
				for (const link of links) {
					link.addEventListener("click", clickHandler);
				}

				function clickHandler(e) {
					e.preventDefault();

					const dataScroll = this.getAttribute("anchor-link");

					const offsetTop = document.querySelector(`[anchor-section="${dataScroll}"]`).offsetTop;

					scroll({
						top: offsetTop,
						behavior: "smooth"
					});
				}
			}
		},

		handleScroll() {
			const els = document.querySelectorAll("[anchor-section]");
			const links = document.querySelectorAll("[anchor-link]");

			function deleteActiveClass() {
				links.forEach((el) => {
					el.classList.remove("active");
				});
			}

			els.forEach((el) => {
				if (window.scrollY >= el.offsetTop - 150 && window.scrollY < el.offsetTop + el.offsetHeight) {
					deleteActiveClass();
					document.querySelector(`[anchor-link="${el.getAttribute("anchor-section")}"]`).classList.add("active");
				}
			});
		}
	}
};
</script>
