import style from "../../../../css/Main/MainContent/MainSearch/SearchArea.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Undervar from "./Undervar";
import LocalInfo from "../../../../dummydata/LocalInfo.json";


import { Swiper, SwiperSlide } from "swiper/react";

export default function SearchArea() {
    
  return (
    <>
      <div className={style.wrap}>
        <div className={style.backBtn}>
          <Link to={`/main/search`}>
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
          </Link>
        </div>

        <div className={style.box1}>
          <div>
            <h3>지역을 선택해주세요</h3>

            <div
              className={style.search}
              onClick={(e) => {
                e.currentTarget.childNodes[1].focus();
              }}
              >
              <div className={style.icon}>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </div>
              <input
                className={style.input}
                type="text"
                placeholder="지역 검색"
              ></input>
            </div>

            <div className={style.swiper}>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                >


                {/* <SwiperSlide className={style.swiperslide} style={{width : "110px", height : "110px"}}>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
              </Swiper>
            </div>
          </div>
        </div>

        {/* <div className={style.box2}>날짜</div>
        <div className={style.box3}>인원</div> */}
        </div>
      <Undervar />
      
    </>
  );
}
