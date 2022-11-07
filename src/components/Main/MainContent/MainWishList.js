import NonLogin from "./MainWishList/NonLogin";
import style from "../../../css/Main/MainContent/MainWishList.module.css";
import { useState } from "react";
import LoginOk from "./MainWishList/LoginOk";

export default function MainWishList() {
  const [auth, setAuth] = useState(1);
  console.log(auth);

  return (
    <>
      <div className={style.wrap}>
        {auth === undefined ? <NonLogin /> : <LoginOk/>}      
        
      </div>
    </>
  );
}
