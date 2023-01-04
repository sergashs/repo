<template>
	<div class="chart-holder">
		<canvas id="myChart" height="300"></canvas>
		{{ labels }}
		{{ datasets }}
		<!-- <span v-if="convertedLabels.length <= 0" class="no-data"> no data </span> -->
	</div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
	props: {
		propData: {
			type: Object,
			default: () => ({})
		}
	},
	data() {
		return {
			ctx: null,
			chart: null,
			labels: [],
			datasets: []
		};
	},
	mounted() {
		this.ctx = document.getElementById("myChart").getContext("2d");

		this.chart = new Chart(this.ctx, {
			type: "line",
			data: {
				labels: ["s", "d", "g"],
				datasets: [
					{
						label: "My First Dataset",
						data: [65, 59, 80, 81, 56, 55, 40],
						fill: false,
						borderColor: "rgb(75, 192, 192)",
						tension: 0.1
					}
				]
			},
			options: {
				maintainAspectRatio: true,
				plugins: {
					legend: {
						display: false
					}
				},
				layout: {},
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
						}
					},
					y: {
						title: {
							display: false
						},
						ticks: {
							display: true,
							maxTicksLimit: 50,
							stepSize: 5
						},
						grid: {
							drawBorder: false,
							color: "#D8D8D8"
						},
						suggestedMin: 0,
						suggestedMax: 50
					}
				}
			}
		});
	},

	watch: {
		propData() {
			console.log(this.propData);

			this.propData.forEach((el) => {
				//console.log(el);

				this.labels.push(el.email);
				this.datasets.push(el.email.length);
			});

			//this.chart.data.labels = this.labels;
			//	this.chart.data.datasets = this.datasets;
			//this.chart.update();
		}

		// propData() {
		// 	this.convertedLabels = this.propData.data.date.map((el) => {
		// 		const day = moment(el).format("D");
		// 		return day >= 10 ? day : "0" + day;
		// 	});
		// 	this.chart.data.labels = this.convertedLabels;
		// 	this.values = [];
		// 	for (let el in this.propData.data) {
		// 		if (el !== "date") {
		// 			const datasets = this.propData.data[el].map((item) => {
		// 				if (item == -1) {
		// 					return null;
		// 				} else {
		// 					return this.returnNewPercentValue(el, item);
		// 				}
		// 			});
		// 			const color = this.getColorById(this.colors, el);
		// 			this.values.push({
		// 				label: this.$t(`charts.${el}`),
		// 				data: datasets,
		// 				backgroundColor: el == "mood" ? this.moodGradient() : color,
		// 				borderColor: el == "mood" ? this.moodGradient() : color
		// 			});
		// 		}
		// 	}
		// 	this.chart.data.datasets = this.values;
		// 	this.chart.update();
		// }
	}
};
</script>

<style lang="scss" scoped>
.all-chart {
	.no-data {
		height: 100%;
	}
}
</style>
