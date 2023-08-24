<template>
	<div class="chat-holder">
		<div class="user-info">
			<template v-if="user">
				<div class="avatar-holder">
					<img :src="user.photoURL" :alt="user.displayName" />
				</div>
				<h3 class="user-name">{{ user.displayName }}</h3>
				<a-button @click="signOut" type="primary">Вийти</a-button>
			</template>
		</div>

		<div class="messages-list" :class="{ empty: messages.length === 0 }" ref="messagesList">
			<a-empty v-if="messages.length === 0" :image="simpleImage">
				<template #description>
					<span> Немає повідомлень </span>
				</template>
			</a-empty>

			<a-comment v-for="item in messages" :key="item">
				<!-- <template #actions>
					<span key="comment-basic-like">
						<a-tooltip title="Like">
							<template v-if="action === 'liked'">
								<LikeFilled @click="like" />
							</template>
							<template v-else>
								<LikeOutlined @click="like" />
							</template>
						</a-tooltip>
						<span style="padding-left: 8px; cursor: auto">
							{{ likes }}
						</span>
					</span>
					<span key="comment-basic-dislike">
						<a-tooltip title="Dislike">
							<template v-if="action === 'disliked'">
								<DislikeFilled @click="dislike" />
							</template>
							<template v-else>
								<DislikeOutlined @click="dislike" />
							</template>
						</a-tooltip>
						<span style="padding-left: 8px; cursor: auto">
							{{ dislikes }}
						</span>
					</span>
					<span key="comment-basic-reply-to">Reply to</span>
				</template> -->
				<template #author
					><a>{{ item.name }}</a></template
				>
				<template #avatar>
					<a-avatar :src="item.avatar_url" :alt="item.name" />
				</template>
				<template #content>
					<p>{{ item.message }}</p>
				</template>
				<template #datetime>
					<a-tooltip :title="'YYYY-MM-DD HH:mm:ss'">
						<span>{{ formatTimestampToTime(item.timestamp) }}</span>
					</a-tooltip>
				</template>
			</a-comment>
		</div>
		<div class="chat-footer">
			<template v-if="user">
				<a-Input placeholder="Текст повідомлення" v-model:value="message" @keypress.enter="sendMessage" />
				<a-button @click="sendMessage" type="primary" :loading="loading">Відправити</a-button>
			</template>
			<template v-else>
				<div class="login-holder">
					<p>Потрібно залогінитись щоб мати змогу писати повідомлення</p>
					<a-button @click="signInWithGooglePopup" type="primary">Залогінитись через гугл</a-button>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
import { db, auth } from "../firebase";
// eslint-disable-next-line,
import { query, collection, getDocs, addDoc, Timestamp, limit, orderBy } from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default {
	data() {
		return {
			message: "",
			messages: [],
			user: null,
			loading: false
		};
	},
	methods: {
		async signInWithGooglePopup() {
			const provider = new GoogleAuthProvider();

			try {
				const result = await signInWithPopup(auth, provider);
				const user = result.user;

				console.log("Користувач успішно увійшов через Google:", user);

				this.user = user;
				localStorage.setItem("user", JSON.stringify(user));
			} catch (error) {
				console.error("Помилка входу через Google:", error.message);
			}
		},
		async signOut() {
			try {
				await auth.signOut();
				this.user = null;
				localStorage.removeItem("user");
			} catch (error) {
				console.error("Помилка під час виходу:", error);
			}
		},
		async sendMessage() {
			this.loading = true;

			try {
				await addDoc(collection(db, "messages"), {
					name: this.user.displayName,
					avatar_url: this.user.photoURL,
					message: this.message,
					timestamp: this.getCurrentTime()
				});

				this.getMessages();
			} catch (e) {
				console.error("Error adding document: ", e);
			} finally {
				this.message = "";
				this.loading = false;
			}
		},
		// async getMessages() {
		// 	try {
		// 		// eslint-disable-next-line
		// 		const querySnapshot = await getDocs(collection(db, "messages"), limit(1));
		// 		/* eslint-disable */
		// 		const messages = [];

		// 		querySnapshot.forEach((doc) => {
		// 			const messageData = doc.data();
		// 			messages.push(messageData);
		// 		});

		// 		this.messages = messages;
		// 	} catch (e) {
		// 		console.error("Error reading database", e);
		// 	}
		// },

		async getMessages() {
			try {
				const q = query(collection(db, "messages"), orderBy("timestamp"), limit(100));

				const querySnapshot = await getDocs(q);

				const messages = [];

				querySnapshot.forEach((doc) => {
					const messageData = doc.data();
					messages.push(messageData);
				});

				this.messages = messages;
			} catch (e) {
				console.error("Error reading database", e);
			} finally {
				setTimeout(() => {
					this.scrollToBottom();
				}, 100);
			}
		},

		getCurrentTime() {
			const now = Timestamp.now();
			return now;
		},
		formatTimestampToTime(timestamp) {
			const date = timestamp.toDate();
			const monthNames = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
			const month = monthNames[date.getMonth()];
			const day = date.getDate().toString().padStart(2, "0");
			const hours = date.getHours().toString().padStart(2, "0");
			const minutes = date.getMinutes().toString().padStart(2, "0");
			return `${day} ${month} в ${hours}:${minutes}`;
		},
		scrollToBottom() {
			const messagesList = this.$refs.messagesList;

			messagesList.scrollTop = messagesList.scrollHeight;
		}
	},
	mounted() {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			this.user = JSON.parse(storedUser);
		}

		this.getMessages();
	}
};
</script>

<style lang="scss">
.chat-holder {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 400px;

	.chat-footer {
		width: 100%;
		display: flex;

		.ant-input {
			margin-right: 10px;
		}
	}

	.user-info {
		display: flex;
		align-items: center;
		margin-bottom: 10px;

		.user-name {
			margin-bottom: 0;
			font-weight: 600;
			margin-right: 5px;
		}

		.avatar-holder {
			width: 40px;
			margin-right: 5px;

			img {
				width: 100%;
				height: auto;
				border-radius: 50%;
			}
		}
	}

	.messages-list {
		margin-bottom: 10px;
		min-height: 500px;
		max-height: 500px;
		overflow: auto;

		&.empty {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}

	.ant-comment-inner {
		padding: 5px 0;
	}

	.login-holder {
		text-align: center;
	}
}
</style>
