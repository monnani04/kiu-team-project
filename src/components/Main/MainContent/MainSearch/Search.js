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
  const [areaState, setAreaState] = useState(true);
  const [dateState, setDateState] = useState(false);
  const [numberState, setNumberState] = useState(false);

  const areaRef = useRef();
  const dateRef = useRef();
  const numberRef = useRef();

  const Local = LocalInfo.data;
  const imgRef = useRef([]);

  const [searchState, setSearchState] = useState();
  const [searchClickState, setSearchClickState] = useState("대구");

  useEffect(() => {
    // console.log(searchState);

    switch (searchState) {
      case "대구":
        return imgRef.current[0].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      case "서울":
        return imgRef.current[1].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      case "부산":
        return imgRef.current[2].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      case "구미":
        return imgRef.current[3].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      case "삼척":
        return imgRef.current[4].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      case "상주":
        return imgRef.current[5].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      case "울산":
        return imgRef.current[6].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }
  }, [searchState]);

  useEffect(() => {
    // searchClickState === undefined
    //   ? false
    //   : sessionStorage.setItem("selectLocal", searchClickState);
    // console.dir(searchClickState);
  }, [searchClickState]);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(()=>{
    // console.dir(date);
  },[date])

  function choiceHandler(area, date, number) {
    setAreaState(area);
    setDateState(date);
    setNumberState(number);
  }

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 0,
  });

  useEffect(()=>{
    // console.dir(options)
  },[options])

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  useEffect(() => {
    areaState === false
      ? ((areaRef.current.childNodes[0].style.display = "block"),
        (areaRef.current.childNodes[1].style.display = "block"),
        (areaRef.current.childNodes[2].style.display = "none"),
        (areaRef.current.style.height = "80px"))
      : ((areaRef.current.childNodes[0].style.display = "none"),
        (areaRef.current.childNodes[1].style.display = "none"),
        (areaRef.current.childNodes[2].style.display = "block"),
        (areaRef.current.style.height = "300px"),
        areaRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        }));
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
        (dateRef.current.style.padding = "0px"),
        dateRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        }));
  }, [dateState]);

  useEffect(() => {
    numberState === false
      ? ((numberRef.current.childNodes[0].style.display = "block"),
        (numberRef.current.childNodes[1].style.display = "block"),
        (numberRef.current.childNodes[2].style.display = "none"),
        (numberRef.current.style.height = "80px"),
        (numberRef.current.style.padding = "28px"))
      : ((numberRef.current.childNodes[0].style.display = "none"),
        (numberRef.current.childNodes[1].style.display = "none"),
        (numberRef.current.childNodes[2].style.display = "block"),
        (numberRef.current.style.height = "250px"),
        (numberRef.current.style.padding = "28px"),
        numberRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        }));
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
                onKeyUp={(e) => {
                  setSearchState(e.currentTarget.value);
                }}
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
                          setSearchClickState(item.localname);
                          imgRef.current.map((item2, i2) => {
                            // console.dir(item2);
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

          <div
            style={{
              display: "none",
            }}
          >
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

          <div
            style={{
              display: "none",
            }}
          >
            <span className={style.information}>여행자 정보를 알려주세요</span>
            <div className={style.options}>
              <div className={style.optionItem}>
                <span className={style.optionText}>성인</span>
                <div className={style.optionCounter}>
                  <button
                    disabled={options.adult <= 1}
                    className={style.optionCounterButton}
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className={style.optionConterNumber}>
                    {options.adult}
                  </span>
                  <button
                    className={style.optionCounterButton}
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <hr />

              <div className={style.optionItem}>
                <span className={style.optionText}>어린이</span>
                <div className={style.optionCounter}>
                  <button
                    disabled={options.children <= 0}
                    className={style.optionCounterButton}
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className={style.optionConterNumber}>
                    {options.children}
                  </span>
                  <button
                    className={style.optionCounterButton}
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <hr />

              <div className={style.optionItem}>
                <span className={style.optionText}>객실 수</span>
                <div className={style.optionCounter}>
                  <button
                    disabled={options.room <= 0}
                    className={style.optionCounterButton}
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span className={style.optionConterNumber}>
                    {options.room}
                  </span>
                  <button
                    className={style.optionCounterButton}
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <Underbar searchClickState={searchClickState} setSearchClickState={setSearchClickState} date={date[0]} setDate={setDate} options={options} setOptions={setOptions}/>
    </>
  );
}
