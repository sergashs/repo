<template>
	<div class="map-page">
		<!-- {{ markers }} -->
		<div class="btn-holder">
			<a-button type="primary" @click="addMarker(e, true)">Create marker</a-button>
		</div>
		<div class="map-holder">
			<div id="mapContainer"></div>
		</div>
		<a-modal v-model:visible="visible" title="Create new marker" @cancel="removeMarker(marker.MarkerClass)" @ok="modalOnSave">
			<a-input v-model:value="marker.title" placeholder="marker title" />
			<a-input v-model:value="marker.lat" placeholder="marker lat" :disabled="createWithoutClick ? false : true" />
			<a-input v-model:value="marker.lng" placeholder="marker lng" :disabled="createWithoutClick ? false : true" />
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
			markers: JSON.parse(localStorage.getItem("markers")) || [],
			latlng: {},
			currentMarker: {
				title: ""
			},
			createWithoutClick: false
		};
	},
	mounted() {
		//fix imgs src
		L.Icon.Default.mergeOptions({
			iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
			iconUrl: require("leaflet/dist/images/marker-icon.png"),
			shadowUrl: require("leaflet/dist/images/marker-shadow.png")
		});

		this.map = L.map("mapContainer").setView([49.05, 29.05], 6);
		L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(this.map);

		this.drawSavedMarkers();

		this.map.on("click", (e) => {
			this.addMarker(e);
		});
	},
	methods: {
		newMarkerClass(lat, lng) {
			return new L.marker([lat, lng], {
				draggable: false,
				title: this.marker.title
			})
				.addTo(this.map)
				.bindPopup(this.marker.title);
		},
		addMarker(e, boolean) {
			this.visible = true;

			if (boolean) {
				this.createWithoutClick = true;
				this.marker.MarkerClass = this.newMarkerClass(0, 0);
			} else {
				this.createWithoutClick = false;
				this.marker.MarkerClass = this.newMarkerClass(e.latlng.lat, e.latlng.lng);
				this.marker.lat = e.latlng.lat;
				this.marker.lng = e.latlng.lng;
			}

			//console.log(e.target);
		},
		modalOnSave() {
			this.visible = false;
			this.removeMarker(this.marker.MarkerClass);

			this.newMarkerClass(this.marker.lat, this.marker.lng);

			this.markers.push({
				title: this.marker.title,
				lat: this.marker.lat,
				lng: this.marker.lng
			});

			localStorage.setItem("markers", JSON.stringify(this.markers));

			this.marker.title = "";
		},
		drawSavedMarkers() {
			this.markers &&
				this.markers.forEach((el) => {
					new L.marker([el.lat, el.lng], { title: el.title }).addTo(this.map).bindPopup(el.title);
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

.btn-holder {
	display: flex;
	justify-content: center;
	padding-bottom: 30px;
}
</style>
