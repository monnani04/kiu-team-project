import { useEffect } from "react";
import style from "../../css/ViewDetailBerth/ViewDetailBerthMain.module.css";
import BackBtn from "./BackBtn";
import Facilities from "./Facilities";
import FooterComponent from "./FooterComponent";
import HostInfo from "./HostInfo";
import MapInfo from "./MapInfo";
import ReviewInfo from "./ReviewInfo";
import RulesInfo from "./RulesInfo";
import TitleInfo from "./TitleInfo";
import ViewDetailBerthSwiper from "./ViewDetailBerthSwiper";
import WishBtn from "./WishBtn";

export default function ViewDetailBerthMain(props) {
  // console.log(props.state);
  const ImgArr = props.state.titleImg;
  //   console.log(ImgArr);
  useEffect(() => {
    document.body.style.overflow = "auto";
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <div className={style.wrap}>
        <BackBtn />
        <WishBtn />
        <ViewDetailBerthSwiper imgArr={ImgArr} />
        <TitleInfo info={props.state} />
        <HostInfo info={props.state}/>
        <MapInfo info={props.state}/>
        <Facilities info={props.state}/>
        <ReviewInfo info={props.state}/>
        <RulesInfo info={props.state}/>
        <FooterComponent info={props.state}/>
      </div>
    </>
  );
}
