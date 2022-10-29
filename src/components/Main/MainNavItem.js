import { Link } from "react-router-dom";
import style from "../../css/Main/MainNavItem.module.css";

export default function MainNavItem(props) {
  return (
    <>
      <div className={style.wrap}>
        <Link to={`/main/${props.value}`}>
          <div className={style.button}>{props.icon}</div>
        </Link>
        <div className={style.name}>{props.name}</div>
      </div>
    </>
  );
}
