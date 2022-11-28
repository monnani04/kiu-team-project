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
  useEffect(() => {}, []);

  const ImgArr = props.berthData[props.idx].titleImg;
  const name1 = props.berthData[props.idx].title;
  const name2 = props.berthData[props.idx].name2;
  // const starImg =props.berthData[props.idx].starImg;
  const grade = props.berthData[props.idx].grade.toFixed(1);
  const [date1, setDate1] = useState(
    sessionStorage.searchData === undefined
      ? new Date()
      : new Date(JSON.parse(sessionStorage.searchData).date.startDate)
  );
  const [date2, setDate2] = useState(
    sessionStorage.searchData === undefined
      ? new Date(new Date().getTime() + 86400000)
      : new Date(JSON.parse(sessionStorage.searchData).date.endDate)
  );

  const [date1Year, setDate1Year] = useState(date1.getFullYear());
  const [date1Month, setDate1Monthr] = useState(date1.getMonth() + 1);
  const [date1Date, setDate1Date] = useState(date1.getDate());

  const [date2Year, setDate2Year] = useState(date2.getFullYear());
  const [date2Month, setDate2Monthr] = useState(date2.getMonth() + 1);
  const [date2Date, setDate2Date] = useState(date2.getDate());

  useEffect(() => {
    // console.dir(props.berthData[props.idx].price)
  }, []);

  const price =
    "₩" + props.berthData[props.idx].price.toLocaleString("ko-KR") + " / 박";

  const [colorState, setColorState] = useState();
  const [wishAdd, setWishAdd] = useState();

  useEffect(() => {
    // console.dir(props.wishState.filter(word => word === props.berthData[props.idx]._id))
    props.wishState === undefined
      ? false
      : props.wishState.filter(
          (word) => word === props.berthData[props.idx]._id
        ).length === 0
      ? setColorState(false)
      : setColorState(true);
  }, []);
  const [color, setColor] = useState("rgba(0,0,0,0.1)");
  // path 재설정 함수
  let navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    colorState === undefined
      ? false
      : colorState === false
      ? setColor("rgba(0,0,0,0.1)")
      : // axios
        //   .put(`/api/users/unwishHotel/${props.berthData[props.idx]._id}`)
        //   .then((res) => {
        //     // console.dir(res);
        //   })
        //   .catch((err) => {
        //     console.dir(err);
        //   })
        setColor("red");
        // axios
        //   .put(`/api/users/wishHotel/${props.berthData[props.idx]._id}`)
        //   .then((res) => {
        //     // console.dir(res);
        //   })
        //   .catch((err) => {
        //     console.dir(err);
        //   })
  }, [colorState]);

  useEffect(()=>{
    wishAdd === undefined 
    ? false
    : wishAdd === false 
      ? axios
        .put(`/api/users/unwishHotel/${props.berthData[props.idx]._id}`)
        .then((res) => {
          // console.dir(res);
        })
        .catch((err) => {
          console.dir(err);
        }) 
      : axios
        .put(`/api/users/wishHotel/${props.berthData[props.idx]._id}`)
        .then((res) => {
          // console.dir(res);
        })
        .catch((err) => {
          console.dir(err);
        })
  },[wishAdd])

  return (
    <>
      <div
        className={style.wishBtn}
        onClick={() => {
          colorState === undefined
          ? false 
          : colorState === false 
            ? (setColorState(true),setWishAdd(true))
            : (setColorState(false),setWishAdd(false))
        }}
      >
        {props.loginCheck === false ? (
          false
        ) : (
          <>
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
          </>
        )}
      </div>
      <div
        className={style.wrap}
        onClick={() => {
          navigate("/viewDetailBerth", {
            state: props.berthData[props.idx],
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
                  backgroundSize: "cover",
                  backgroundPosition: "50%",
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
              {date1Month}월 {date1Date}일 ~ {date2Month}월 {date2Date}일
            </div>
            <div className={style.price}>{price}</div>
          </div>

          <div className={style.starWrap}>
            <FontAwesomeIcon
              icon="fa-solid fa-star"
              color="#FFAF0E"
              size="xl"
            />
            <div className={style.grade}>&nbsp;{grade}</div>
          </div>
        </div>
      </div>
    </>
  );
}
