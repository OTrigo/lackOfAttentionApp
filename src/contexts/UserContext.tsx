import { createContext } from "react";
import { UserContextType } from "../types/UserProps";

const UserContext = createContext<UserContextType>({
  user: {
    name: "",
    password: "",
    loggedIn: false,
  },
  setUser: () => {},
});
export default UserContext;