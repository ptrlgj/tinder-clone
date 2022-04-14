import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAOfGnYe3Se9rtCuWpauI0Mv_K-bTK08a4",
  authDomain: "tinder-clone-f2131.firebaseapp.com",
  projectId: "tinder-clone-f2131",
  storageBucket: "tinder-clone-f2131.appspot.com",
  messagingSenderId: "1093155368462",
  appId: "1:1093155368462:web:7df26f5a3fede8916c565f"
};

initializeApp(firebaseConfig);

export const database = getFirestore()

export const collectionReference = collection(database, "people")

// export default collectionReference;
