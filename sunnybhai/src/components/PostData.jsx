import { collection, addDoc,  } from "firebase/firestore"; 
import db from '../firebase';

export default async function PostData(email, password) {
    try {
        const docRef = await addDoc(collection(db, "data"), { email, password,});
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ",email, password, e);
    }
}


