import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "../../css/ViewDetailBerth/ViewDetailBerthMain.module.css";
import {
  authUIStateFunc,
  authUITopFunc,
  authUIDisplayFunc,
  authUIOpacityFunc,
} from "../../store/modules/authUIStateSlice";

export default function FooterComponent(props) {
  let navigate = useNavigate();
  // console.dir(props.info);
  const dispatch = useDispatch();

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
  const [date1Month, setDate1Monthr] = useState(date1.getMonth()+1);
  const [date1Date, setDate1Date] = useState(date1.getDate());

  const [date2Year, setDate2Year] = useState(date2.getFullYear());
  const [date2Month, setDate2Monthr] = useState(date2.getMonth()+1);
  const [date2Date, setDate2Date] = useState(date2.getDate());

  return (
    <>
      <div className={style.footerEmpty}></div>
      <div className={style.footerWrap}>
        <div className={style.payText}>
          <div>
            {"₩" + Number(props.info.price).toLocaleString("ko-KR") + " / 박"}
          </div>
          <div>{date1Month}월 {date1Date}일 ~ {date2Month}월 {date2Date}일</div>
        </div>
        <div
          className={style.payBtn}
          onClick={() => {
            axios
              .get("/api/users/checkauthentication")
              .then((res) => {
                props.setPayLeft("0");
                document.body.style.overflow = "hidden";
              })
              .catch((err) => {
                // console.dir(err);
                dispatch(authUIDisplayFunc("flex"));
                setTimeout(() => {
                  dispatch(authUIStateFunc(true));
                  dispatch(authUITopFunc(0));
                  dispatch(authUIOpacityFunc(0.5));
                }, 100);
              });
          }}
        >
          예약하기
        </div>
      </div>
    </>
  );
}
