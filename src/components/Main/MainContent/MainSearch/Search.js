import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { ko } from "date-fns/locale";

import style from "../../../../css/Main/MainContent/MainSearch/Search.module.css";

import LocalInfo from "../../../../dummydata/LocalInfo.json";
import Underbar from "./Undervar";

export default function Search() {
  const [areaState, setAreaState] = useState(false);
  const [dateState, setDateState] = useState(false);
  const [numberState, setNumberState] = useState(false);

  const areaRef = useRef();
  const dateRef = useRef();
  const numberRef = useRef();

  const Local = LocalInfo.data;
  const imgRef = useRef([]);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  function choiceHandler(area, date, number) {
    setAreaState(area);
    setDateState(date);
    setNumberState(number);
  }

  useEffect(() => {
    // console.dir("areaState: " + areaState);
    // console.dir("dateState: " + dateState);
    // console.dir("numberState: " + numberState);
  }, [areaState, dateState, numberState]);

  useEffect(() => {
    areaState === false
      ? ((areaRef.current.childNodes[0].style.display = "block"),
        (areaRef.current.childNodes[1].style.display = "block"),
        (areaRef.current.childNodes[2].style.display = "none"),
        (areaRef.current.style.height = "80px"))
      : ((areaRef.current.childNodes[0].style.display = "none"),
        (areaRef.current.childNodes[1].style.display = "none"),
        (areaRef.current.childNodes[2].style.display = "block"),
        (areaRef.current.style.height = "300px"));
  }, [areaState]);

  useEffect(() => {
    dateState === false
      ? ((dateRef.current.childNodes[0].style.display = "block"),
        (dateRef.current.childNodes[1].style.display = "block"),
        (dateRef.current.childNodes[2].style.display = "none"),
        (dateRef.current.style.height = "80px"),
        (dateRef.current.style.padding = "28px"))
      : ((dateRef.current.childNodes[0].style.display = "none"),
        (dateRef.current.childNodes[1].style.display = "none"),
        (dateRef.current.childNodes[2].style.display = "block"),
        (dateRef.current.style.height = "450px"),
        (dateRef.current.style.padding = "0px"));
  }, [dateState]);

  useEffect(() => {
    numberState === false
      ? ((numberRef.current.childNodes[0].style.display = "block"),
        (numberRef.current.childNodes[1].style.display = "block"))
      : ((numberRef.current.childNodes[0].style.display = "none"),
        (numberRef.current.childNodes[1].style.display = "none"));
  }, [numberState]);

  return (
    <>
      <div className={style.backBtn}>
        <Link to={`/main/search`}>
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
        </Link>
      </div>
      <div className={style.wrap}>
        <div
          ref={areaRef}
          className={style.areabox}
          onClick={() => {
            choiceHandler(true, false, false);
          }}
        >
          <div style={{ float: "left" }}>지역</div>
          <div style={{ float: "right" }}>대구</div>

          <div
            style={{
              display: "none",
            }}
          >
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

            <div>
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                className={style.swiper}
              >
                {Local.map((item, i) => {
                  // console.dir(item)
                  return (
                    <SwiperSlide
                      key={i}
                      className={style.swiperslide}
                      style={{ width: "120px" }}
                    >
                      <img
                        ref={(el) => (imgRef.current[i] = el)}
                        className={style.img}
                        src={item.localImg}
                        onClick={(e) => {
                          // console.dir(imgRef.current);
                          imgRef.current.map((item2, i2) => {
                            console.dir(item2);
                            item2.style.border = "2px solid rgb(230, 230, 230)";
                          });
                          e.currentTarget.style.border =
                            "2px solid rgb(150, 150, 150)";
                        }}
                      ></img>
                      <div style={{ fontSize: "15px", paddingTop: "5px" }}>
                        {item.localname}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
        <div
          ref={dateRef}
          className={style.datebox}
          onClick={() => {
            choiceHandler(false, true, false);
          }}
        >
          <div style={{ float: "left" }}>날짜</div>
          <div style={{ float: "right" }}>일주일</div>

          <div style={{
            display:"none"
          }}>
            <span className={style.date}>날짜를 선택하세요</span>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className={style.cal}
              locale={ko}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
        <div
          ref={numberRef}
          className={style.numberbox}
          onClick={() => {
            choiceHandler(false, false, true);
          }}
        >
          <div style={{ float: "left" }}>여행자</div>
          <div style={{ float: "right" }}>게스트 추가</div>
        </div>
      </div>

      <Underbar />
    </>
  );
}
