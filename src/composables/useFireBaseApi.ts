import { getFirestore } from "firebase/firestore";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { useRouter } from "vue-router";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.VUE_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  //databaseURL: `https://${process.env.VUE_APP_FIREBASE_PROJECT_ID}-default-rtdb.europe-west1.firebasedatabase.app`,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: `${process.env.VUE_APP_FIREBASE_PROJECT_ID}.appspot.com`,
};

const fbApp = initializeApp(firebaseConfig);

export function useFirebaseApiFunc() {
  const auth = getAuth(fbApp);
  const dbStore = getFirestore(fbApp);

  const getCurrentUser = () => {
    return new Promise((res, rej) => {
      const removeListener = onAuthStateChanged(
        getAuth(),
        (user) => {
          removeListener();
          res(user);
        },
        rej
      );
    });
  };

  const signUpFB = async (email: string, password: string, confirm: string) => {
    if (password === confirm) {
      await createUserWithEmailAndPassword(auth, email, password);
    } else {
      throw new Error("wrong-confirm");
    }
  };
  const signInFB = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const authObject = {
    "/sign-in": signInFB,
    "/register": signUpFB,
  };

  const handleSignOut = () => {
    const router = useRouter();
    signOut(auth).then(() => {
      //errMessage.value = "By-By!";
      //autoHideToast(errMessage.value);
      router.push("/sign-in");
    });
  };

  return { auth, getCurrentUser, dbStore, authObject, handleSignOut };
}
