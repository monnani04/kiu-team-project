import ProfileLogin from "./MainProfile/ProfileLogin.js";
import Profile from "./MainProfile/Profile.js";
import { useState } from "react";

export default function MainProfile() {
  const [auth, setAuth] = useState(true);

  console.log(auth);

  return <>{auth === false ? <ProfileLogin /> : <Profile />}</>;
}
