import style from "../../../../css/Main/MainContent/MainSearch/SearchLinkBox.module.css";
import SearchArea from "./SearchArea";
import { Link } from "react-router-dom";


export default function SearchLinkBox() {
  return (
    <>
      <div className={style.box}>
        <Link to={'/SearchArea'}>
          <div className={style.textGrp}>
            <div>여행 계획을 짜보세요!</div>
            <div>여행 장소 • 날짜 • 인원 수 선택</div>
          </div>
        </Link>
        <div className={style.searchImg}></div>
      </div>
    </>
  );
}
