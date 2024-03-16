import { db } from "../services/config";
import { collection, addDoc } from "firebase/firestore";

const useCreateAccount = async ({name, password, partnerID}: NewUserProps) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name,
      password,
      partnerID,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default useCreateAccount;
