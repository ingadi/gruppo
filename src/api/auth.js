import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const getUserInfo = (setUserInfo) =>
  new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      const userInfo =
        user === null
          ? null
          : {
              displayName: user["displayName"],
              photoUrl: user["photoUrl"],
              signOut: async () => {
                try {
                  await signOut(auth);
                  setUserInfo(null);
                } catch (error) {
                  throw error;
                }
              },
            };
      setUserInfo(userInfo);
      resolve();
    });
  });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
// export const logOut = () => signOut(auth);
