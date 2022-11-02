import SearchLinkBox from "./MainSearch/SearchLinkBox";
import style from "../../../css/Main/MainContent/MainSearch.module.css";
import SearchMap from "./MainSearch/SearchMap";
export default function MainSearch() {
  return (
    <>
      <div className={style.wrap}>
        <SearchLinkBox />
        <SearchMap/>
      </div>
    </>
  );
}
