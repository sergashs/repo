export default {
	computed: {
		xs() {
			return this.$store.getters["breakpoints/xs"];
		},
		sm() {
			return this.$store.getters["breakpoints/sm"];
		},
		md() {
			return this.$store.getters["breakpoints/md"];
		},
		lg() {
			return this.$store.getters["breakpoints/lg"];
		},
		xl() {
			return this.$store.getters["breakpoints/xl"];
		},
		xxl() {
			return this.$store.getters["breakpoints/xxl"];
		},

		up_lg() {
			const lg = this.$store.getters["breakpoints/lg"];
			const xl = this.$store.getters["breakpoints/xl"];
			const xxl = this.$store.getters["breakpoints/xxl"];
			return lg || xl || xxl;
		},

		up_md() {
			const md = this.$store.getters["breakpoints/md"];
			const lg = this.$store.getters["breakpoints/lg"];
			const xl = this.$store.getters["breakpoints/xl"];
			const xxl = this.$store.getters["breakpoints/xxl"];
			return md || lg || xl || xxl;
		},

		up_sm() {
			const sm = this.$store.getters["breakpoints/sm"];
			const md = this.$store.getters["breakpoints/md"];
			const lg = this.$store.getters["breakpoints/lg"];
			const xl = this.$store.getters["breakpoints/xl"];
			const xxl = this.$store.getters["breakpoints/xxl"];
			return sm || md || lg || xl || xxl;
		},



	},
}