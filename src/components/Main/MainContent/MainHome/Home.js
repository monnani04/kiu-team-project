import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../../../../css/Main/MainContent/MainHome/Home.module.css";

function LoginBtn() {
  return (
    <>
      <div className={style.div1}>
        <Link to={"/login"}>
          <input type="button" className={style.btn1} value="로그인"></input>
        </Link>
      </div>
    </>
  );
}

export default function Home() {
  const [auth, setAuth] = useState(1);

  return (
    <>
      <div className={style.wrap}>
        <img className={style.img} src="/img/house.jpg"></img>
        <h1 className={style.text}>
          여행을 <br /> 시작해주세요
        </h1>
        <div className={style.div}>
          <Link to={`/main/search`}>
            <input type="button" className={style.btn} value="둘러보기"></input>
          </Link>
        </div>
        <br />
        {auth != undefined ? (
          false
        ) : (
          <div className={style.div1}>
        <Link to={"/login"}>
          <input type="button" className={style.btn1} value="로그인"></input>
        </Link>
      </div>
        )}
        {/* <div className={style.div1}>
          <Link to={'/login'}>
            <input type="button" className={style.btn1} value="로그인"></input>
          </Link>
        </div> */}
      </div>
    </>
  );
}