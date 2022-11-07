import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import style from "../../css/Main/MainNavItem.module.css";

export default function MainNavItem(props) {
  const buttonPath = useRef();

  // console.log(buttonPath.current)

  buttonPath.current !== undefined
    ? (buttonPath.current.childNodes[0].childNodes[0].style.fill = props.fill)
    : false;

  return (
    <>
      <div className={style.wrap}>
        <Link to={`/main/${props.value}`}>
          <div ref={buttonPath} className={style.button}>
            {props.icon}
          </div>
        </Link>
        <div className={style.name}>{props.name}</div>
      </div>
    </>
  );
}
