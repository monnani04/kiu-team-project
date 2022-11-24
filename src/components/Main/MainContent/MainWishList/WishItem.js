import styles from "./ono.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function WishItem(props) {
  console.dir(props.item);
  const [color, setColor] = useState("red");
  const [deletee, setDeletee] = useState(false);

  let navigate = useNavigate();

  const wrap = useRef();
  useEffect(() => {
    deletee === true
      ? ((wrap.current.style.opacity = 0),
        setTimeout(() => {
          wrap.current.style.display = "none";
        }, 500),
        axios
          .put(`/api/users/unwishHotel/${props.item._id}`)
          .then((res) => {
            // console.dir(res);
          })
          .catch((err) => {
            console.dir(err);
          }))
      : false;
  }, [deletee]);
  return (
    <>
      <div
        ref={wrap}
        style={{
          width: "160px",
          height: "180px",
          backgroundColor: "white",
          marginBottom: "30px",
          borderRadius: "15px",
          boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
          alignContent: "space-between",
          marginLeft: "15px",
          position: "relative",
          transition: "0.5s ease-in-out",
          opacity: 1,
        }}
        onClick={() => {
          navigate("/viewDetailBerth", {
            state: props.item,
          });
        }}
      >
        <div
          style={{
            position: "relative",
            left: "50%",
            top: "62px",
            transform: "translate(-50%, -50%)",
            width: "130px",
            height: "110px",
          }}
        >
          <div
            className="sungminImg"
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(../../../../img/${props.item.titleImg[0]})`,
              backgroundSize: "cover",
              borderRadius: "15px",
            }}
          ></div>
          <FontAwesomeIcon
            className={styles.wishBtnItem1}
            icon="fa-solid fa-heart"
            color={color}
            size="xl"
          />
          <FontAwesomeIcon
            className={styles.wishBtnItem2}
            icon="fa-regular fa-heart"
            color="rgb(255,255,255)"
            size="xl"
            onClick={() => {
              deletee === false ? setDeletee(true) : false;
            }}
          />
        </div>
        <p
          style={{
            position: "relative",
            fontSize: "13px",
            left: "15px",
            top: "19px",
            fontSize: "12px",
          }}
        >
          {props.item.name2}{" "}
        </p>
        <p
          style={{
            position: "relative",
            fontWeight: "bold",
            fontSize: "13px",
            left: "14px",
            top: "25px",
          }}
        >
          {props.item.name}
        </p>
      </div>
    </>
  );
}
