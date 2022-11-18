import style from "../../../../css/Main/MainContent/MainSearch/SearchArea.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Undervar from "./Undervar";
import LocalInfo from "../../../../dummydata/LocalInfo.json";


import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

export default function SearchArea(props) {

  const Local = LocalInfo.data;
  const imgRef= useRef([]);
    
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

            <div >
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                className={style.swiper}
                >
                  {Local.map((item, i)=> {
                    // console.dir(item)
                    return (
                      <SwiperSlide key={i} className={style.swiperslide} style={{width : "120px"}}>
                        <img ref={(el)=>imgRef.current[i]=el} className={style.img} src={item.localImg}
                          onClick={(e)=>{
                            // console.dir(imgRef.current);
                            imgRef.current.map((item2, i2)=>{
                              console.dir(item2)
                              item2.style.border = "2px solid rgb(230, 230, 230)";
                            })
                            e.currentTarget.style.border = "2px solid rgb(150, 150, 150)";
                          }}>
                        </img>
                        <div style={{fontSize:"15px", paddingTop:"5px"}}>{item.localname}</div>
                      </SwiperSlide>

                    )
                  })}
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
