import { db } from "../services/config";
import { collection, addDoc } from "firebase/firestore";
import { NewUserProps } from "../types/UserProps";

const useCreateAccount = async ({name, password, partnerId}: NewUserProps) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name,
      password,
      partnerId,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default useCreateAccount;
