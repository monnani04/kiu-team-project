import style from "../../css/Main/MainNav.module.css";
import MainNavItem from "./MainNavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MainNav() {
    const item1Icon = <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />;
    const item2Icon = <FontAwesomeIcon icon="fa-solid fa-heart" />
    const item3Icon = <FontAwesomeIcon icon="fa-solid fa-house" />;
    const item4Icon = <FontAwesomeIcon icon="fa-solid fa-bell" />;
    const item5Icon = <FontAwesomeIcon icon="fa-solid fa-user" />;
  return (
    <>
      <div className={style.wrap}>
        <div className={style.itemBox}>
          <MainNavItem name="둘러보기" icon={item1Icon} value="search"/>
          <MainNavItem name="위시리스트" icon={item2Icon} value="wishlist"/>
          <MainNavItem name="홈으로" icon={item3Icon} value="home"/>
          <MainNavItem name="알림" icon={item4Icon} value="notice"/>
          <MainNavItem name="프로필" icon={item5Icon} value="profile"/>
        </div>
      </div>
    </>
  );
}
