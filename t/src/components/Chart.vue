<template>
	<LineChart :options="chartOptions" :chart-data="chartData" />
</template>

<script>
import { Chart, registerables } from "chart.js";
import { LineChart } from "vue-chart-3";

Chart.register(...registerables);

export default {
	name: "App",
	components: {
		LineChart
	},
	props: {
		propData: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			labels: [],
			datasets: [],
			chartOptions: {
				maintainAspectRatio: false,
				plugins: {
					htmlLegend: {
						containerID: "legend-container"
					},
					legend: {
						display: false
					}
				}
			}
		};
	},
	computed: {
		chartData() {
			return {
				labels: this.labels,
				datasets: [
					{
						data: this.datasets
					}
				]
			};
		}
	},
	watch: {
		propData() {
			this.labels = this.propData.map((el) => {
				return el.email;
			});

			this.datasets = this.propData.map((el) => {
				return el.email.length;
			});
		}
	}
};
</script>
