import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../../../../css/Main/MainContent/MainSearch/SearchNumber.module.css";
import NumberUnderVar from "./NumberUnderVar";

export default function SearchNumber() {
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 0,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <>
      <div className={style.backBtn}>
        <Link to={`/main/search`}>
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
        </Link>
      </div>
      <div className={style.wrap}>
        <div className={style.areabox}>
          <div style={{ float: "left" }}>지역</div>
          <div style={{ float: "right" }}>대구</div>
        </div>
        <div className={style.datebox}>
          <div style={{ float: "left" }}>날짜</div>
          <div style={{ float: "right" }}>일주일</div>
        </div>
        <div className={style.numberbox}>
          <div>
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
      <NumberUnderVar />
    </>
  );
}
