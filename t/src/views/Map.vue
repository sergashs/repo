<template>
	<div class="map-page">
		{{ markers }}
		<div id="mapContainer"></div>
		<a-modal v-model:visible="visible" title="Create new marker" @cancel="removeMarker(marker)" @ok="modalOnSave">
			<a-input v-model:value="marker.title" placeholder="marker title" />
			<a-input v-model:value="marker.lat" placeholder="marker alt" :disabled="true" />
			<a-input v-model:value="marker.lng" placeholder="marker alt" :disabled="true" />
		</a-modal>
	</div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
	data() {
		return {
			visible: false,
			map: null,
			marker: {},
			markers: [{ title: "x", lat: 49.19, lng: 30.84705106258729 }],
			latlng: {},
			currentMarker: {
				title: ""
			}
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

		// this.marker = L.marker([50.4501, 30.5234], { alt: "Kyiv" })
		// 	.addTo(this.map) // "Kyiv" is the accessible name of this marker
		// 	.bindPopup("Kyiv, Ukraine is the birthplace of Leaflet!");

		this.drawSavedMarkers();

		this.map.on("click", (e) => {
			this.addMarker(e);
		});

		console.log(localStorage.getItem("markers"));
	},
	methods: {
		addMarker(e) {
			this.visible = true;

			this.marker.lat = e.latlng.lat;
			this.marker.lng = e.latlng.lng;

			console.log(e.target);

			this.marker.o = new L.marker([e.latlng.lat, e.latlng.lng], {
				draggable: false
			}).addTo(this.map);
			// .bindPopup(this.marker.alt);
		},
		modalOnSave() {
			this.visible = false;

			delete this.marker.o._events;

			this.removeMarker(this.marker.o);

			new L.marker([this.marker.lat, this.marker.lng], {
				title: this.marker.title
			})
				.addTo(this.map)
				.bindPopup(this.marker.alt);

			console.log(this.marker);

			this.markers.push(this.marker.o);

			localStorage.setItem("markers", JSON.stringify(this.markers));

			this.marker.title = "";
		},
		drawSavedMarkers() {
			this.markers.map((el) => {
				// new L.marker([el[0], el[1]], { alt: el.alt }).addTo(this.map).bindPopup(el.alt);
				L.marker([el.lat, el.lng], { title: el.title })
					.addTo(this.map) // "Kyiv" is the accessible name of this marker
					.bindPopup(el.title);
			});
		},
		removeMarker(marker) {
			this.map.removeLayer(marker);
		}
	}
};
</script>

<style lang="scss" scoped>
#mapContainer {
	height: 480px;
}
</style>
