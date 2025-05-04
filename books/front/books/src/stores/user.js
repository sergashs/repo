import { defineStore } from "pinia";
import { reactive } from "vue";
import { auth, provider, signInWithPopup } from "@/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";



export const useUserStore = defineStore("user", () => {
	const user = reactive({
		uid: null,
		displayName: null,
		email: null,
		photoURL: null,
	});

	// Функція для входу
	const login = async () => {
		try {
			const result = await signInWithPopup(auth, provider);
			const u = result.user;
			user.uid = u.uid;
			user.displayName = u.displayName;
			user.email = u.email;
			user.photoURL = u.photoURL;

			const token = await u.getIdToken();
			sessionStorage.setItem("authToken", token); // Зберігаємо токен
			localStorage.setItem("userData", JSON.stringify({ // Зберігаємо дані про користувача
				uid: u.uid,
				displayName: u.displayName,
				email: u.email,
				photoURL: u.photoURL,
			}));
		} catch (error) {
			console.error("Помилка входу:", error);
		}
	};

	// Функція для виходу
	const logout = async () => {
		try {
			await signOut(auth);
			user.uid = null;
			user.displayName = null;
			user.email = null;
			user.photoURL = null;
			sessionStorage.removeItem("authToken");
			localStorage.removeItem("userData"); // Очищаємо дані користувача
		} catch (error) {
			console.error("Помилка виходу:", error);
		}
	};

	// При завантаженні сторінки, перевіряємо локальне сховище
	if (localStorage.getItem("userData")) {
		const storedUser = JSON.parse(localStorage.getItem("userData"));
		user.uid = storedUser.uid;
		user.displayName = storedUser.displayName;
		user.email = storedUser.email;
		user.photoURL = storedUser.photoURL;
	}

	return { user, login, logout };
});
