<template>
	<header class="header">
		<div class="container">
			<nuxt-link to="/" class="logo">LOGO</nuxt-link>
			<nav class="nav">
				<ul class="menu">
					<li v-for="(link, index) in menu" :key="index" class="menu-item">
						<nuxt-link :to="link.url">
							{{ link.title }}
						</nuxt-link>
					</li>
				</ul>
				<a-space v-if="Object.keys(currentUser).length <= 0" :size="10">
					<a-button href="/login" type="primary">Login</a-button>
					<a-button>Registration</a-button>
				</a-space>
				<a-space v-else :size="10">
					<a-typography-title :level="5" style="margin-bottom: 0">{{ currentUser.username }}</a-typography-title>
					<a-button @click="logout">Logout</a-button>
				</a-space>
			</nav>
		</div>
	</header>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const currentUser = computed(() => store.getters["user/user"]);
// const currentUser = ref("");

const menu = [
	{
		title: "Home",
		url: "/"
	},
	{
		title: "News",
		url: "/news"
	},
	{
		title: "Add Post",
		url: "/news/create"
	}
];

// currentUser.value = await $fetch("http://localhost:5000/api/users", {
// 	method: "GET",
// 	headers: {
// 		"x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsInVzZXJuYW1lIjoic2VyZ2FzIiwiZW1haWwiOiJzZXJnYXNAZ21haWwuY29tIiwiaWF0IjoxNjk0OTU3Nzc2LCJleHAiOjE2OTUwNDQxNzZ9.B6FmL80AvnbLLPvQ-588Ij9bqdv9uaTbkrmTI_zdACw"
// 	}
// }).catch((error) => error.data);

function logout() {
	console.log("?");
	store.dispatch("user/logout");
	currentUser.value = {};
}
</script>

<style lang="scss" scoped>
.header {
	padding: 20px 0;

	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		font-weight: 600;
		font-size: 20px;
		text-transform: uppercase;
	}

	.nav {
		display: flex;
		align-items: center;
	}

	.menu {
		list-style: none;
		margin: 0 20px 0 0;
		padding: 0;
		display: flex;

		.menu-item {
			&:not(:last-child) {
				margin-right: 20px;
			}
		}
	}

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
}
</style>
