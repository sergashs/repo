<template>
	<div class="home flex justify-center items-center pt-5">
		<div class="max-w-xs w-full">
			<div>
				<div class="flex">
					<Input v-model:modelValue="zipcode" :input="{ placeholder: 'Print zip code' }" />
					<Button :button="{ title: 'Render', disabled: !zipcode.length }" class="ml-2" @click="sendRequest" />
				</div>
				<div class="flex justify-center pt-2">
					<Loading :loading="loading.zip" />
				</div>

				<ul v-if="!loading.zip && zipInfo && !error.zip">
					<li v-for="(item, index) in zipInfo.places" :key="index"><span class="font-medium">City:</span> {{ item["place name"] }} <br /><span class="font-medium">State:</span> {{ item.state }}</li>
				</ul>
				<div v-if="error.zip">
					{{ error.zip }}
				</div>
			</div>
			<div class="flex justify-center pt-12">
				<Button :button="{ title: 'get ip info' }" class="bg-blue-500 w-full" @click="getIpInfo" />
			</div>
			<div class="flex justify-center pt-2">
				<Loading :loading="loading.ip" />
			</div>
			<div v-if="ipData">
				<span class="font-medium">ISP:</span> {{ ipData.isp }} <br />
				<span class="font-medium">City:</span> {{ ipData.city }}<br />
				<span class="font-medium">Region:</span> {{ ipData.regionName }}<br />
				<span class="font-medium">Country:</span> {{ ipData.country }}<br />
			</div>
		</div>
	</div>
</template>

<script>
import Input from "@/components/Input";
import Button from "@/components/Button";
import Loading from "@/components/Loading";

export default {
	name: "Home",
	components: {
		Input,
		Button,
		Loading
	},
	data() {
		return {
			zipcode: "",
			zipInfo: "",
			loading: {
				zip: false,
				ip: false
			},
			error: {
				zip: "",
				ip: ""
			},
			ipData: ""
		};
	},
	methods: {
		async sendRequest() {
			this.loading.zip = true;

			try {
				const options = {
					method: "GET"
				};

				const response = await fetch(`http://api.zippopotam.us/us/${this.zipcode}`, options);

				if (!response.ok) {
					throw new Error("HTTP error, status = " + response.status);
				}

				const data = await response.json();
				this.zipInfo = data;
				this.error.zip = "";
			} catch (error) {
				console.error(error);
				if (error instanceof Error && error.message.includes("404")) {
					console.log("404 (Not Found)");
					this.error.zip = "404 (Not Found)";
				} else {
					this.error.zip = error;
				}
			} finally {
				this.loading.zip = false;
			}
		},
		async getIpInfo() {
			const options = {
				method: "GET"
			};

			this.loading.ip = true;

			try {
				const response = await fetch(`http://ip-api.com/json`, options);
				const data = await response.json();

				this.ipData = data;
				this.error.ip = "";
			} catch (error) {
				console.error(error);
				if (error instanceof Error && error.message.includes("404")) {
					console.log("404 (Not Found)");
					this.error.ip = "404 (Not Found)";
				} else {
					this.error.ip = error;
				}
			} finally {
				this.loading.ip = false;
			}
		}
	}
};
</script>
