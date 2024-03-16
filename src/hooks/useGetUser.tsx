import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../services/config";
import { UserAuthenticationProps } from "../types/UserProps";
import { NoLoggedUser } from "../utils/NoLoggedUser";

const useGetUser = async ({ name, password }: UserAuthenticationProps) => {
  try {
    const searchUser = query(
      collection(db, "users"),
      where("name", "==", name),
      where("password", "==", password)
    );
    const querySnapshot = await getDocs(searchUser);

    const result = NoLoggedUser;

    querySnapshot.forEach((doc) => {
      const user = doc?.data();
      console.log("Documento encontrado:", user);
      result.name = user?.name;
      result.partnerId = user?.partnerId ?? "";
      result.loggedIn = true;
    });

    return result;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
  }
};

export default useGetUser;
