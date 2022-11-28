import { height } from "@mui/system";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import moment from "moment";

export default function NoticeItem(props) {
  const [hotelData, setHotelData] = useState();

  const [deletee, setDeletee] = useState(false);

  const wrap = useRef();

  useEffect(() => {
    // console.log(props.data);
    axios
      .get(`/api/hotels/find/${props.data.hotelId}`)
      .then((res) => {
        // console.dir(res.data);
        setHotelData(res.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);

  const [dateDiff, setDateDiff] = useState(
    Math.floor(
      Math.abs(
        (new Date().getTime() - new Date(props.data.startDate).getTime()) /
          (1000 * 60 * 60 * 24)
      )
    )
  );

  useEffect(() => {
    // console.dir(dateDiff);
  }, []);

  useEffect(() => {
    deletee === true
      ? ((wrap.current.style.opacity = 0),
        setTimeout(() => {
          wrap.current.style.display = "none";
        }, 500),
          axios
          .put(`/api/reservations/alarmDelete/${props.data._id}`)
          .then((res)=>{
            console.dir(res.data)
          })
          .catch((err)=>{
            console.dir(err)
          })
        )
      : false;
  }, [deletee]);
  return (
    <>
      <div
        ref={wrap}
        style={{
          width: "380px",
          height: "65px",
          backgroundColor: "white",
          marginBottom: "30px",
          borderRadius: "20px",
          boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
          // top: "10%",
          left: "50%",
          transform: "translate(-50%, 0%)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "0 10px 0 20px",
          boxSizing: "border-box",
          transition: "0.5s ease-in-out",
          opacity: 1,
        }}
      >
        <div
          style={{
            width: "320px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <button
            style={{
              width: "15px",
              height: "20px",
              position: "absolute",
              left: "0",
              top: "0",
              border: "none",
              borderRadius: "20px",
            }}
            onClick={() => {
              deletee === false ? setDeletee(true) : false;
            }}
          >
            x
          </button>

          <p
            style={{
              position: "relative",
              fontSize: "11px",
            }}
          >
            {dateDiff === 0
              ? "숙소 예약이 완료되었습니다."
              : `여행 기간이 ${dateDiff}일 남았습니다.`}
          </p>
          <p
            style={{
              position: "relative",
              top: "0",
              fontSize: "11px",
            }}
          >
            {hotelData === undefined ? false : hotelData.name2} -{" "}
            {hotelData === undefined ? false : hotelData.name} -{" "}
            {moment(new Date(props.data.startDate)).format("YYYY-MM-DD")}
          </p>
        </div>

        <div
          style={{
            position: "relative",
            // left: "89%",
            left: "0",
            width: "60px",
            height: "50px",
          }}
        >
          <div
            className="sungminImg"
            style={{
              width: "100%",
              height: "100%",
              backgroundImage:
                hotelData === undefined
                  ? false
                  : `url(../../../../img/${hotelData.titleImg[0]})`,
              backgroundSize: "cover",
              borderRadius: "15px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
