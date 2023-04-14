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
import { onMounted, computed } from "vue";
import { useStore, mapGetters, mapActions } from "vuex";

const store = useStore();
const router = useRouter();
const currentUser = computed(() => store.getters["user/user"]);
const getUser = () => store.dispatch("user/getUser");

const menu = [
	{
		title: "Home",
		url: "/"
	},
	{
		title: "Posts",
		url: "/posts"
	},
	{
		title: "Add Post",
		url: "/posts/create"
	}
];

function logout() {
	store.dispatch("user/logout");
}

onMounted(async () => {
	if (localStorage.getItem("token")) {
		await getUser();
	}
});
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
