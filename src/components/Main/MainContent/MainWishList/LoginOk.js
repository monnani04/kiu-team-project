import style from "../../../../css/Main/MainContent/MainWishList/LoginOk.module.css";
import WishItem from "./WishItem";

export default function LoginOk(props) {
  return (
    <>
      <div className={style.wrap}>
        <div className={style.div}>
          <h2 className={style.wish}>위시 리스트 </h2>
          <div className={style.list}>
            <WishItem />
            <WishItem />
            <WishItem />
            <WishItem />
            <WishItem />
            <WishItem />
          </div>
        </div>
      </div>
    </>
  );
}
