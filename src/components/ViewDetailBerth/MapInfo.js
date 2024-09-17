import style from "../../css/ViewDetailBerth/ViewDetailBerthMain.module.css";
import KakaoMapScript from "../../KakaoMapScript_detailView";
import { useEffect } from "react";

export default function MapInfo(props) {
  useEffect(() => {
    sessionStorage.setItem("detailViewLat", props.info.lat);
    sessionStorage.setItem("detailViewLng", props.info.lng);
    KakaoMapScript();

    // KakaoMapScript();
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
