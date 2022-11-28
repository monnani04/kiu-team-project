import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../../../css/Main/MainContent/MainSearch/Undervar.module.css";

export default function Underbar(props) {
  const [searchData, setSearchData] = useState();

  useEffect(() => {
    // console.dir(props);
    setSearchData({
      date: props.date,
      options: props.options,
      searchClickState: props.searchClickState,
    });
  }, [props]);

  const navigate = useNavigate();

  return (
    <>
      <div className={style.footerWrap}>
        <div className={style.payText}>
          <div
            style={{ fontSize: "15px" }}
            onClick={() => {
              props.setSearchClickState("daegu");
              props.setDate([
                {
                  startDate: new Date(),
                  endDate: new Date(new Date().getTime() + 86400000),
                  key: "selection",
                },
              ]);
              props.setOptions({
                adult: 1,
                children: 0,
                room: 0,
              });
              // const date1 = new Date(JSON.parse(JSON.stringify(props.date)).endDate);
              // const date2 = new Date(JSON.parse(JSON.stringify(props.date)).startDate);
              // console.log("date1 : " + date1);
              // console.log("date2 : " + date2);
            }}
          >
            초기화
          </div>
        </div>
        <div
          className={style.payBtn}
          onClick={() => {
            sessionStorage.setItem("searchData", JSON.stringify(searchData));
            navigate("/main/search");
          }}
        >
          검색
        </div>
      </div>
    </>
  );
}
