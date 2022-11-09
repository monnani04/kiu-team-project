import ProfileLogin from "./MainProfile/ProfileLogin.js";
import Profile from "./MainProfile/Profile.js";
import { useEffect, useState } from "react";

export default function MainProfile() {
  const [auth, setAuth] = useState(true);

  // console.log(auth);

  useEffect(()=>{
    document.body.style.overflow = "auto";
  },[])
  return <>{auth === false ? <ProfileLogin /> : <Profile />}</>;
}
