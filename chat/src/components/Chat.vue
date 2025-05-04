<template>
  <div class="component-holder">
    <div class="chat-holder">
      <div class="container">
        <!-- <button @click="deleteAllMessages">delete all messages</button> -->
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
          <a-spin v-if="loadingMessages" />
          <a-empty v-else-if="!loadingMessages && messages.length === 0" :image="simpleImage">
            <template #description>
              <span> Немає повідомлень </span>
            </template>
          </a-empty>

          <a-comment v-for="item in messages" :key="item" :class="isMyCommentClass(item.name)">
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
            <a-popover placement="topLeft" v-model:visible="showEmoji" trigger="click">
              <template #content>
                <EmojiPicker @emoji_click="pickEmoji" />
              </template>
              <smile-outlined :style="{ fontSize: '19px' }" />
            </a-popover>

            <div class="send-area">
              <a-textarea placeholder="Текст повідомлення" v-model:value="message" @keypress.enter="sendMessage" @input="onPrint" />
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
import { SmileOutlined } from "@ant-design/icons-vue";
import EmojiPicker from "@/components/EmojiPicker";

export default {
  components: {
    SmileOutlined,
    EmojiPicker
  },
  data() {
    return {
      message: "",
      messages: [],
      user: null,
      loading: false,
      computedHeight: "auto",
      loadingMessages: true,
      showEmoji: false
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
        try {
          await addDoc(collection(db, "messages"), {
            userId: this.user.uid,
            name: this.user.displayName,
            avatar_url: this.user.photoURL,
            message: this.message,
            timestamp: this.getCurrentTime()
          });

          console.log(this.user);

          await this.getMessages();
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    },
    async getMessages() {
      try {
        const q = query(collection(db, "messages"), orderBy("timestamp"), limit(100));

        const querySnapshot = await getDocs(q);
        const messages = [];

        console.log(q);

        querySnapshot.forEach((doc) => {
          const messageData = doc.data();
          messages.push(messageData);
        });

        this.messages = messages;
      } catch (e) {
        console.error("Error reading database", e);
      } finally {
        this.loadingMessages = false;
        await this.messages;
        await this.scrollToBottom();
        await this.setMessageHeight();
      }
    },
    async deleteAllMessages() {
      try {
        const messagesCollection = collection(db, "messages");
        const querySnapshot = await getDocs(messagesCollection);

        querySnapshot.forEach((doc) => {
          deleteDoc(doc.ref);
        });

        this.messages = [];
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
    },
    isMyCommentClass(username) {
      if (this.user && this.user.displayName) {
        return this.user.displayName === username ? "my-message" : "";
      } else {
        return "";
      }
    },
    onPrint(event) {
      const textarea = event.target;

      textarea.style.height = "18px";
      textarea.style.height = textarea.scrollHeight + "px";
      this.setMessageHeight();
      this.scrollToBottom();
    },

    setMessageHeight() {
      const messagesHolder = document.querySelector(".messages-list");
      const container = document.querySelector(".chat-holder");
      const footer = document.querySelector(".chat-footer");
      const exitButton = document.querySelector(".exit-button");

      if (exitButton && window.innerWidth < 768) {
        messagesHolder.style.maxHeight = container.offsetHeight - footer.offsetHeight - exitButton.offsetHeight + 10 + "px";
      }
    },

    async addBaseChangeListener() {
      const messagesCollection = collection(db, "messages");
      const q = query(messagesCollection, orderBy("timestamp"), limit(100));

      const allChangesProcessed = new Promise((resolve) => {
        let processedChanges = 0;

        onSnapshot(q, async (snapshot) => {
          const user = this.user;

          snapshot.docChanges().forEach((change) => {
            const messageData = change.doc.data();

            const isCurrentUserMessage = user && user.uid === messageData.userId;

            if (isCurrentUserMessage) {
              this.message = "";
            }

            processedChanges++;
            if (processedChanges === snapshot.docChanges().length) {
              resolve();
            }
          });

          await this.getMessages();
        });
      });

      await allChangesProcessed;
      await this.scrollToBottom();
      await this.setMessageHeight();
    },

    pickEmoji(emoji) {
      this.message += emoji;
    }
  },
  mounted() {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }

    this.getMessages();
    this.addBaseChangeListener();
  }
};
</script>

<style lang="scss">
.component-holder {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (min-width: 768px) {
    padding: 20px;
    max-height: 700px;
  }
}

.ant-popover-arrow {
  display: none;
}

.chat-holder {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 0 10px 0;
  background: white;

  @media (min-width: 768px) {
    border-radius: 10px;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.05);
  }

  > .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }

  .chat-footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .anticon {
      margin-bottom: 10px;
    }

    .ant-input {
      max-height: 100px;
      resize: none;
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
    padding-top: 10px;
    margin-bottom: 10px;
    flex: 1;
    overflow: auto;
    max-height: 500px;

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
    align-items: flex-end;
    padding: 10px;
    background: #f1f1f1;
    border-radius: 10px;

    .ant-input {
      min-height: 55px;
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

.ant-popover-inner-content {
  max-width: 340px;

  @media (max-width: 575px) {
    max-width: 100%;
  }
}
</style>
