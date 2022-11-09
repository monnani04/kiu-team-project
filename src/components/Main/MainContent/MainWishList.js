import NonLogin from "./MainWishList/NonLogin";
import style from "../../../css/Main/MainContent/MainWishList.module.css";
import { useEffect, useState } from "react";
import LoginOk from "./MainWishList/LoginOk";

export default function MainWishList() {
  const [auth, setAuth] = useState(1);
  console.log(auth);

  useEffect(()=>{
    document.body.style.overflow = "auto";
  },[])
  return (
    <>
      <div className={style.wrap}>
        {auth === undefined ? <NonLogin /> : <LoginOk/>}
      </div>
    </>
  );
}
