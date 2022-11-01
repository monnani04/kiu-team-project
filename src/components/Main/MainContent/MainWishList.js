import NonLogin from "./MainWishList/NonLogin";
import style from "../../../css/Main/MainContent/MainWishList.module.css";

export default function MainWishList() {
  return (
    <>
      <div className={style.wrap}>
        <NonLogin />
      </div>
    </>
  );
}
