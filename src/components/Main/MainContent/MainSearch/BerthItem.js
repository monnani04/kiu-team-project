import { useEffect, useState } from "react";
import style from "../../../../css/Main/MainContent/MainSearch/BerthItem.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Zoom } from "swiper";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  authUIDisplayFunc,
  authUIOpacityFunc,
  authUIStateFunc,
  authUITopFunc,
} from "../../../../store/modules/authUIStateSlice";
import { useDispatch } from "react-redux";

import berthList from "../../../../dummydata/BerthList.json";
import axios from "axios";

export default function BerthItem(props) {

  useEffect(()=>{
    // console.dir(props.berthData[props.idx])
  },[])
  

  const ImgArr =props.berthData[props.idx].titleImg;
  const name1 =props.berthData[props.idx].title;
  const name2 =props.berthData[props.idx].name2;
  // const starImg =props.berthData[props.idx].starImg;
  const grade =props.berthData[props.idx].grade.toFixed(1);
  const date1 ="10월 28일";
  const date2 ="11월 7일";
  const price =
    "₩" +
    props.berthData[props.idx].price.toLocaleString("ko-KR") +
    " / 박";
  const [colorState, setColorState] = useState(false);
  const [color, setColor] = useState("rgba(0,0,0,0.1)");
  // path 재설정 함수
  let navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    colorState === false ? setColor("rgba(0,0,0,0.1)") : setColor("red");
  }, [colorState]);

  

  return (
    <>
      <div
        className={style.wishBtn}
        onClick={() => {
          colorState === false ? setColorState(true) : setColorState(false);
        }}
      >
        <FontAwesomeIcon
          className={style.wishBtnItem1}
          icon="fa-solid fa-heart"
          color={color}
          size="xl"
        />
        <FontAwesomeIcon
          className={style.wishBtnItem2}
          icon="fa-regular fa-heart"
          color="rgb(255,255,255)"
          size="xl"
        />
      </div>
      <div
        className={style.wrap}
        onClick={() => {
          navigate("/viewDetailBerth", {
            state: props.berthData[props.idx]
            // {
              // id:props.berthData[props.idx].id,
              // titleImg:props.berthData[props.idx].titleImg,
              // starImg:props.berthData[props.idx].starImg,
              // grade:props.berthData[props.idx].grade,
              // name:props.berthData[props.idx].name,
              // name2:props.berthData[props.idx].name2,
              // date1:props.berthData[props.idx].date1,
              // date2:props.berthData[props.idx].date2,
              // price:props.berthData[props.idx].price,
              // type:props.berthData[props.idx].type,
              // addr_num:props.berthData[props.idx].addr_num,
              // addr_street:props.berthData[props.idx].addr_street,
              // addr_lot:props.berthData[props.idx].addr_lot,
              // addr_detail:props.berthData[props.idx].addr_detail,
              // max_people:props.berthData[props.idx].max_people,
              // bedroom:props.berthData[props.idx].bedroom,
              // bed:props.berthData[props.idx].bed,
              // bathroom:props.berthData[props.idx].bathroom,
              // facilities:props.berthData[props.idx].facilities,
              // rules:props.berthData[props.idx].rules,
              // lng:props.berthData[props.idx].lng,
              // lat:props.berthData[props.idx].lat,
              // hostID:props.berthData[props.idx].hostID,
              // hostName:props.berthData[props.idx].hostName,
              // hostImg:props.berthData[props.idx].hostImg,
              // title: props.berthData[props.idx].title,
            // },
          });

          dispatch(authUIStateFunc(false));
          dispatch(authUITopFunc("100%"));
          dispatch(authUIOpacityFunc(0));
          dispatch(authUIDisplayFunc("none"));
        }}
      >
        <Swiper
          pagination={true}
          loop={true}
          zoom={true}
          modules={[Pagination, Zoom]}
          className="mySwiper"
          style={{
            height: "270px",
            borderRadius: "30px",
            boxShadow: "0 3px 6px rgba(0,0,0,0.5)",
          }}
        >
          {ImgArr.map((item, i) => {
            return (
              <SwiperSlide
                key={i}
                className={style.itemImg}
                style={{
                  backgroundImage: `url(../../../../img/${item})`,
                  backgroundSize:"cover",
                  backgroundPosition:"50%"
                }}
                // loading="lazy"
              ></SwiperSlide>
            );
          })}
        </Swiper>
        <div className={style.BerthInfoWrap}>
          <div className={style.leftWrap}>
            <div className={style.name2}>{name2}</div>
            <div className={style.name1}>{name1}</div>
            <div className={style.date}>
              {date1} ~ {date2}
            </div>
            <div className={style.price}>{price}</div>
          </div>

          <div className={style.starWrap}>
            <FontAwesomeIcon icon="fa-solid fa-star" color="#FFAF0E" size="xl"/>
            <div className={style.grade}>&nbsp;{grade}</div>
          </div>
        </div>
      </div>
    </>
  );
}
