import style from "../../../../css/Main/MainContent/MainNotice/Notice.module.css";
import NoticeItem from "./NoticeItem";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import zIndex from "@mui/material/styles/zIndex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Notice(props) {
  const [reserveData, setReserveData] = useState();

  const noAlarm = useRef();
  const alarmWindow = useRef();

  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    axios
      .get("/api/reservations/alarm/true")
      .then((res) => {
        // console.dir(res.data);
        setReserveData(res.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [reRender]);

  useEffect(() => {
    reserveData === undefined
      ? false
      : reserveData.length === 0
      ? (noAlarm.current.style.display = "flex")
      : (alarmWindow.current.style.display = "block");
  }, [reserveData]);

  return (
    <>
      <div className={style.wrap}>
        <div className={style.div}>
          <div
            ref={noAlarm}
            style={{
              width: "100%",
              height: "100%",
              zIndex: 99998,
              backgroundColor: "rgb(248,248,248)",
              position: "absolute",
              top: 0,
              left: 0,
              // display:"flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              display: "none",
            }}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-bell-slash"
              size="10x"
              color="rgba(0,0,0,0.5)"
            />
            <div
              style={{
                color: "rgba(0,0,0,0.5)",
                fontSize: "25px",
                marginTop: "50px",
              }}
            >
              알림이 없습니다
            </div>
            <small
              style={{
                color: "#a53939",
                // fontSize: "25px",
                marginTop: "50px",
                textDecoration:"underline"
              }}
              onClick={()=>{
                axios
                  .put("/api/reservations/alarmAll/true")
                  .then((res) => {
                    setReRender(true)
                    noAlarm.current.style.display = "none";
                    alarmWindow.current.style.display = "block";
                  })
                  .catch((err) => {
                    console.dir(err);
                  });
              }}
            >
              알림 다시 보기
            </small>
          </div>
          <div
            ref={alarmWindow}
            style={{
              display: "none",
            }}
          >
            <h2 className={style.title}>알림</h2>
            <button
              className={style.delete}
              onClick={() => {
                noAlarm.current.style.display = "flex";
                alarmWindow.current.style.display = "none";
                axios
                  .put("/api/reservations/alarmAll/false")
                  .then((res) => {
                    // console.dir(res.data);
                  })
                  .catch((err) => {
                    console.dir(err);
                  });
              }}
            >
              모두 지우기
            </button>

            <div className={style.list}>
              {reserveData === undefined
                ? false
                : reserveData.map((item, i) => {
                    return <NoticeItem key={i} data={item} />;
                  })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
