export default {
	mounted() {
		this.$nextTick(() => {
			this.onSetBreakpoint();
		});
		window.addEventListener("resize", this.onSetBreakpoint);
	},
	beforeDestroy() {
		window.removeEventListener("resize", this.onSetBreakpoint);
	},
	methods: {
		onSetBreakpoint() {
			this.$store.commit("breakpoints/setBreakpoint");
		}
	}
}