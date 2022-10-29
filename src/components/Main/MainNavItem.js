
import style from "../../css/Main/MainNavItem.module.css";

export default function MainNavItem(props) {
  return (
    <>
      <div className={style.wrap}>
        <div className={style.button}>
          {props.icon}
        </div>
        <div className={style.name}>{props.name}</div>
      </div>
    </>
  );
}
