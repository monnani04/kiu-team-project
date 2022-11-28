import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";

export default function ReservationItem(props) {

  const [hotelData, setHotelData] = useState();

  useEffect(()=>{
    // console.dir(props.reserveData);
    axios
    .get(`/api/hotels/find/${props.reserveData.hotelId}`)
    .then((res)=>{
      // console.dir(res.data);
      setHotelData(res.data);
    })
    .catch((err)=>{
      console.dir(err);
    })
  },[])

  return (
    <>
      <p
        style={{
          position: "relative",
          top:"0",
          left: "14px",
          fontWeight: "bold",
          fontSize: "15px",
          // marginTop: "50px",
          marginBottom:"15px"
        }}
      >
        {moment(props.reserveData.createdAt).format("YYYY-MM-DD")}
      </p>
      <div
        style={{
          width: "360px",
          height: "150px",
          backgroundColor: "white",
          marginBottom: "60px",
          borderRadius: "20px",
          boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, 0%)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "10px 10px 10px 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "320px",
            height:"100%",
            display: "flex",
            flexDirection: "column",
            justifyContent:"space-around"
          }}
        >
          <p
            style={{
              position: "relative",
              fontSize: "13px",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            {hotelData === undefined ? "" : hotelData.name}
          </p>
          <p
            style={{
              position: "relative",
              fontSize: "13px",
              marginBottom: "5px",
            }}
          >
            호스트 명 - {hotelData === undefined ? "" : hotelData.hostName}
          </p>
          <p
            style={{
              position: "relative",
              fontSize: "13px",
              marginBottom: "5px",
            }}
          >
            {moment(props.reserveData.startDate).format("YYYY-MM-DD")} ~ {moment(props.reserveData.endDate).format("YYYY-MM-DD")}
          </p>
          <p
            style={{
              position: "relative",
              fontSize: "13px",
            }}
          >
            성인 - {props.reserveData.adult}명 아동 - {props.reserveData.children}명
          </p>
        </div>

        <div
          style={{
            position: "relative",
            left: "0",
            width: "60px",
            height: "50px",
          }}
        >
          <div
            className="sungminImg"
            style={{
              position: "relative",
              top: "50%",
              left: "0%",
              transform: "translate(-50%, -50%)",
              width: "110px",
              height: "130px",
              backgroundImage: `url(../../../../img/${hotelData === undefined ? "" : hotelData.titleImg[0]})`,
              backgroundPosition:"50%, 0",
              backgroundRepeat:"no-repeat",
              backgroundSize: "cover",
              borderRadius: "15px",
            }}
          ></div>
          {/* {console.log(hotelData)} */}
        </div>
      </div>
    </>
  );
}
