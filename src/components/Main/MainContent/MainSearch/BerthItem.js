import { useEffect } from "react";
import style from "../../../../css/Main/MainContent/MainSearch/BerthItem.module.css";
import berthList from "../../../../dummydata/BerthList.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Zoom } from "swiper";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BerthItem(props) {
  // console.dir(berthList.data);
  const ImgArr = berthList.data[props.idx].titleImg;
  const name1 = berthList.data[props.idx].name;
  const name2 = berthList.data[props.idx].name2;
  const starImg = berthList.data[props.idx].starImg;
  const grade = berthList.data[props.idx].grade.toFixed(1);
  const date1 = berthList.data[props.idx].date1;
  const date2 = berthList.data[props.idx].date2;
  const price =
    "₩" +
    Number(berthList.data[props.idx].price).toLocaleString("ko-KR") +
    " / 박";

  // path 재설정 함수
  let navigate = useNavigate();

  useEffect(() => {}, []);
  return (
    <>
      <div className={style.wrap} onClick={() => {
        
      }}>
        <div
          className={style.wishBtn}
          onClick={(e) => {
            e.currentTarget.childNodes[0].childNodes[0].style.fill === "red"
              ? (e.currentTarget.childNodes[0].childNodes[0].style.fill =
                  "rgba(0,0,0,0.2)")
              : (e.currentTarget.childNodes[0].childNodes[0].style.fill =
                  "red");
          }}
        >
          <FontAwesomeIcon icon="fa-solid fa-heart" />
        </div>
        <input type="hidden" name="wish" value={false} />
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
                }}
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
            <div
              style={{
                backgroundImage: `url(../../../../img/icon/${starImg})`,
                width: "26px",
                height: "24px",
              }}
            ></div>
            <div className={style.grade}>&nbsp;{grade}</div>
          </div>
        </div>
      </div>
    </>
  );
}
