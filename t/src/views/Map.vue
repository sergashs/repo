<template>
	<div class="map-page">
		map page

		<div id="mapContainer" @click="clickOnMap"></div>
	</div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
	data() {
		return {
			map: null,
			marker: null,
			markers: [["49.6676", "23.9502"]]
		};
	},
	mounted() {
		L.Icon.Default.mergeOptions({
			iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
			iconUrl: require("leaflet/dist/images/marker-icon.png"),
			shadowUrl: require("leaflet/dist/images/marker-shadow.png")
		});

		this.map = L.map("mapContainer").setView([49.05, 29.05], 6);
		L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(this.map);

		this.marker = L.marker([50.4501, 30.5234], { alt: "Kyiv" })
			.addTo(this.map) // "Kyiv" is the accessible name of this marker
			.bindPopup("Kyiv, Ukraine is the birthplace of Leaflet!");

		this.markers.forEach((el) => {
			L.marker([el[0], el[1]], { alt: "Kyiv" })
				.addTo(this.map) // "Kyiv" is the accessible name of this marker
				.bindPopup("Kyiv, Ukraine is the birthplace of Leaflet!");
		});
	},
	methods: {
		clickOnMap() {
			this.map.on("click", function (e) {
				var coord = e.latlng;
				var lat = coord.lat.toFixed(4);
				var lng = coord.lng.toFixed(4);
				console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
#mapContainer {
	height: 480px;
}
</style>
