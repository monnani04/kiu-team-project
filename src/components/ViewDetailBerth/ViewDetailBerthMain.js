import { useEffect, useState } from "react";
import { Routes } from "react-router-dom";
import style from "../../css/ViewDetailBerth/ViewDetailBerthMain.module.css";
import LoginSlide from "../Login/LoginSlide";
import BackBtn from "./BackBtn";
import Facilities from "./Facilities";
import FooterComponent from "./FooterComponent";
import HostInfo from "./HostInfo";
import MapInfo from "./MapInfo";
import Pay from "./Pay";
import RulesInfo from "./RulesInfo";
import ReviewInfo from "./ReviewInfo";
import Report from "./Report";
import TitleInfo from "./TitleInfo";
import ViewDetailBerthSwiper from "./ViewDetailBerthSwiper";
import WishBtn from "./WishBtn";
import ReviewWrite from "./ReviewWrite";
import FacilitiesView from "./FacilitiesView";
import RulesView from "./RulesView";
import axios from "axios";

export default function ViewDetailBerthMain(props) {
  // console.log(props.state);
  const ImgArr = props.state.titleImg;
  //   console.log(ImgArr);
  useEffect(() => {
    document.body.style.overflow = "auto";
    window.scrollTo({ top: 0, behavior: "auto" });
    
  }, []);

  const [payLeft, setPayLeft] = useState("100%");

  const [wishState, setWishState] = useState();

  useEffect(()=>{
    axios
    .post("/api/users/userinfo")
    .then((res)=>{
      // console.dir(res.data.wishList);
      setWishState(res.data.wishList)
    })
    .catch((err)=>{
      console.dir(err)
    })
  },[])
  // const [thisWrapOverflow, setThisWrapOverflow] = useState();
  return (
    <>
      <div className={style.wrap}>
        <BackBtn />
        {wishState === undefined ? false : <WishBtn wishState={wishState} info={props.state}/>}
        <ViewDetailBerthSwiper imgArr={ImgArr} />
        <TitleInfo info={props.state} />
        <HostInfo info={props.state} />
        <MapInfo info={props.state} />
        <Facilities info={props.state} />
        <ReviewInfo info={props.state} />
        <RulesInfo info={props.state} />
        <Report info={props.state} />
        <FooterComponent info={props.state} setPayLeft={setPayLeft} />
      </div>

      <Pay info={props.state} left={payLeft} setPayLeft={setPayLeft} />
      <LoginSlide />
      <ReviewWrite info={props.state}/>
      <FacilitiesView info={props.state}/>
      <RulesView info={props.state}/>
    </>
  );
}
