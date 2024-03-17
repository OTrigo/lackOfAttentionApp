import React, { useEffect, useState } from "react";
import Routes from "./src/routes";
import SignIn from "./src/pages/SignIn";
import { NoLoggedUser } from "./src/utils/NoLoggedUser";

export default function App() {
  const [user, setUser] = useState(NoLoggedUser);

  const [login, setLogin] = useState(false);

  return login ? (
    <Routes user={user} setUser={setUser} />
  ) : (
    <SignIn setUser={setUser} setLogin={setLogin} />
  );
}
