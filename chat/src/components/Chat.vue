<template>
	<div class="component-holder">
		<div class="chat-holder">
			<div class="container">
				<!-- <button @click="deleteAllMessages">ddd</button> -->
				<!-- <div class="user-info">
				<template v-if="user">
					<div class="avatar-holder">
						<img :src="user.photoURL" :alt="user.displayName" />
					</div>
					<h3 class="user-name">{{ user.displayName }}</h3>
					<a-button @click="signOut" type="primary">Вийти</a-button>
				</template>
			</div> -->

				<div class="messages-list" :class="{ empty: messages.length === 0 }" ref="messagesList">
					<a-empty v-if="messages.length === 0" :image="simpleImage">
						<template #description>
							<span> Немає повідомлень </span>
						</template>
					</a-empty>

					<a-comment v-for="item in messages" :key="item" :class="item.name === user.displayName ? 'my-message' : ''">
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
							<a-avatar :size="28" :src="item.avatar_url" :alt="item.name" />
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
						<div class="send-area">
							<a-Input placeholder="Текст повідомлення" v-model:value="message" @keypress.enter="sendMessage" />
							<a-button @click="sendMessage" type="primary" :disabled="this.message.length < 0" :loading="loading">Відправити</a-button>
						</div>
					</template>
					<template v-else>
						<div class="login-holder">
							<p>Потрібно залогінитись щоб мати змогу писати повідомлення</p>
							<a-button @click="signInWithGooglePopup" type="primary">Залогінитись через гугл</a-button>
						</div>
					</template>
				</div>
			</div>
		</div>
		<template v-if="user">
			<a-button @click="signOut" class="exit-button" type="text">Вийти</a-button>
		</template>
	</div>
</template>

<script>
import { db, auth } from "../firebase";
import { query, collection, getDocs, addDoc, Timestamp, limit, orderBy, deleteDoc } from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";

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
			if (this.message.length > 0) {
				this.loading = true;

				try {
					await addDoc(collection(db, "messages"), {
						name: this.user.displayName,
						avatar_url: this.user.photoURL,
						message: this.message,
						timestamp: this.getCurrentTime()
					});

					// this.getMessages();
				} catch (e) {
					console.error("Error adding document: ", e);
				} finally {
					this.message = "";
					this.loading = false;
				}
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
			}
		},
		async deleteAllMessages() {
			try {
				const messagesCollection = collection(db, "messages");
				const querySnapshot = await getDocs(messagesCollection);

				querySnapshot.forEach((doc) => {
					deleteDoc(doc.ref);
				});

				this.messages = []; // Очистити масив повідомлень у Vue
			} catch (error) {
				console.error("Помилка під час видалення повідомлень:", error);
			}
		},
		getCurrentTime() {
			const now = Timestamp.now();
			return now;
		},
		formatTimestampToTime(timestamp) {
			if (timestamp) {
				const date = timestamp.toDate();
				const monthNames = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
				const month = monthNames[date.getMonth()];
				const day = date.getDate().toString().padStart(2, "0");
				const hours = date.getHours().toString().padStart(2, "0");
				const minutes = date.getMinutes().toString().padStart(2, "0");
				return `${day} ${month} в ${hours}:${minutes}`;
			}
		},
		scrollToBottom() {
			const messagesList = this.$refs.messagesList;

			if (messagesList && messagesList.scrollHeight) {
				messagesList.scrollTop = messagesList.scrollHeight;
			}
		}
	},
	mounted() {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			this.user = JSON.parse(storedUser);
		}

		// this.getMessages();

		const messagesCollection = collection(db, "messages");
		const q = query(messagesCollection, orderBy("timestamp"), limit(100));

		const addedMessageIds = []; // Список вже доданих повідомлень

		onSnapshot(q, (snapshot) => {
			snapshot.docChanges().forEach((change) => {
				if (change.type === "added") {
					const messageData = change.doc.data();
					const messageId = change.doc.id;

					if (!addedMessageIds.includes(messageId)) {
						this.messages.push(messageData);
						addedMessageIds.push(messageId);

						setTimeout(() => {
							this.scrollToBottom();
						}, 100);
					}
				}
			});
		});
	}
};
</script>

<style lang="scss">
.component-holder {
	width: 100%;
	max-width: 400px;
	display: flex;
	flex-direction: column;
}

.chat-holder {
	display: flex;
	flex-direction: column;
	padding: 10px 0;
	background: white;
	border-radius: 10px;
	box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.05);

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

	.ant-comment {
		width: fit-content;
		margin-bottom: 10px;

		.ant-comment-inner {
			padding: 0;
			align-items: flex-end;
		}

		.ant-comment-content {
			padding: 5px;
			background: #f2f2f2;
			border-radius: 10px 10px 10px 0;
			word-break: break-word;
		}

		.ant-comment-avatar {
			margin-right: 5px;

			img {
				width: 100%;
				height: auto;
			}
		}

		.ant-comment-content-author-name {
			> * {
				font-weight: 600;
				font-size: 13px;
				color: black;
			}
		}

		.ant-comment-content-author-time {
			color: #939393;
		}

		&.my-message {
			margin-left: auto;

			.ant-comment-inner {
				flex-direction: row-reverse;
			}

			.ant-comment-content {
				background: #fae4cb;
				border-radius: 10px 10px 0 10px;
			}

			.ant-comment-avatar {
				margin-right: 0;
				margin-left: 5px;
			}

			.ant-comment-content-author {
				text-align: right;
				justify-content: flex-end;
			}
		}
	}

	.login-holder {
		text-align: center;
	}

	.send-area {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 10px;
		background: #f1f1f1;
		border-radius: 10px;

		.ant-input {
			padding: 0;
			background: transparent;
			border: none;
			box-shadow: none;
		}

		.ant-btn {
			margin-left: auto;
			color: white;
			background: black;
			border-color: black;
			border-radius: 5px;
		}
	}

	.exit-button {
		margin: auto;
	}
}
</style>
