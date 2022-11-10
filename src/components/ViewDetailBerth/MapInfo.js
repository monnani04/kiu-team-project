import style from "../../css/ViewDetailBerth/ViewDetailBerthMain.module.css";
import KakaoMapScript from "../../KakaoMapScript";
import { useEffect } from "react";


export default function MapInfo(props) {
    useEffect(() => {
        KakaoMapScript();
      }, []);
  return (
    <>
      <div className={style.MapInfoWrap}>
        <div className={style.MapInfoWrap_title}>위치</div>
        <div className={style.map} id="myMap"></div>
        <div></div>
      </div>
    </>
  );
}
