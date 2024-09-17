const { kakao } = window;
import { useDispatch, useSelector } from "react-redux";
import { latStateFunc, lngStateFunc } from "./store/modules/latlngSlice";

let lat = null;
let lng = null;

function detailViewLat(){
  lat = Number(sessionStorage.detailViewLat);
}

function detailViewLng(){
  lng = Number(sessionStorage.detailViewLng);
}

export default function KakaoMapScript() {
  // sessionStorage.setItem("detailViewLat", 35.8674536201437);
  // sessionStorage.setItem("detailViewLng", 128.5850556036308);
  detailViewLat();
  detailViewLng();

  const container = document.getElementById("myMap");

  // console.log(typeof lat);
  // console.log(lat);
  // console.log(typeof lng);
  // console.log(lng);

  setTimeout(()=>{
    const options = {
      center: new kakao.maps.LatLng(lng, lat),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  },100)
  
  // console.log(container);
}
