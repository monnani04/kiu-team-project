import style from "../../../../css/Main/MainContent/MainProfile/ProfileSwiper.module.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HostingInfo from "../../../../dummydata/HostingInfo.json";
// import { Pagination } from "swiper";

export default function ProfileSwiper() {
  const HosingInfo = HostingInfo.data;
  // console.dir(HosingInfo);
  return (
    <>
      <div className={style.profileswiper}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          // pagination={{
          //   clickable: true,
          // }}
          // modules={[Pagination]}
          className={style.swiper}
        >
          {HosingInfo.map((item, i) => {
            return (
              <SwiperSlide key={i} className={style.swiperslide} style={{width : "200px", height : "230px",}}>
                <img className={style.img} src={item.titleImg}></img>
                <h1>{item.addr_detail} </h1>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
