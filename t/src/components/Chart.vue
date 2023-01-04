<template>
	<div class="chart-holder">
		<canvas id="myChart" height="300"></canvas>
	</div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
	props: {
		propData: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			ctx: null,
			chart: null,
			labels: []
		};
	},
	mounted() {
		this.ctx = document.getElementById("myChart").getContext("2d");

		this.chart = new Chart(this.ctx, {
			type: "line",
			data: {
				labels: [],
				datasets: []
			},
			options: {
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false
					}
				},
				layout: {
					padding: {
						top: 20,
						left: 20,
						right: 25,
						bottom: -20
					}
				},
				responsive: true,
				scales: {
					x: {
						title: {
							display: true,
							font: {
								size: 20
							}
						},
						grid: {
							display: true
						},
						ticks: {
							autoSkip: true,
							maxTicksLimit: 7
						}
					},
					y: {
						title: {
							display: true
						},
						ticks: {
							display: true,
							maxTicksLimit: 100,
							stepSize: 10
						},
						grid: {
							drawBorder: true,
							color: function () {
								return "#D8D8D8";
							}
						},
						suggestedMin: 0,
						suggestedMax: 100
					}
				}
			}
		});
	},

	methods: {},
	watch: {
		//	propData() {
		// let data = [];
		// data = toRaw(this.propData);
		// toRaw(data).forEach((el) => {
		// 	this.labels.push(el.email);
		// });
		// console.log();
		//this.chart.data.labels = toRaw(this.labels);
		// this.chart.data.labels = ["s", "2", "3"];
		// this.chart.update();
		// this.labels = this.propData.map((el) => {
		// 	return el;
		// });
		//this.chart.update();
		// this.convertedLabels = this.propData.data.date.map((el) => {
		// 	const day = moment(el).format("D");
		// 	return day >= 10 ? day : "0" + day;
		// });
		// this.chart.data.labels = this.convertedLabels;
		// this.values = [];
		// for (let el in this.propData.data) {
		// 	if (el !== "date") {
		// 		const datasets = this.propData.data[el].map((item) => {
		// 			if (item == -1) {
		// 				return null;
		// 			} else {
		// 				return this.returnNewPercentValue(el, item);
		// 			}
		// 		});
		// 		const color = this.getColorById(this.colors, el);
		// 		this.values.push({
		// 			label: this.$t(`charts.${el}`),
		// 			data: datasets,
		// 			backgroundColor: el == "mood" ? this.moodGradient() : color,
		// 			borderColor: el == "mood" ? this.moodGradient() : color
		// 		});
		// 	}
		// }
		// this.chart.data.datasets = this.values;
		// this.chart.update();
		//}
	}
};
</script>
