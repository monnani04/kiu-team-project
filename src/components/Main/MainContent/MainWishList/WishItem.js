import styles from "./ono.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function WishItem(props) {
  console.dir(props.img);
  const [color, setColor] = useState("red");
  return (
    <>
      <div
        style={{
          width: "160px",
          height: "180px",
          backgroundColor: "white",
          marginBottom: "30px",
          borderRadius: "15px",
          boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
          alignContent: "space-between",
          marginLeft:"15px"
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
              backgroundImage: `url(../../../../img/${props.img[0]})`,
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
          {props.name2}{" "}
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
          {props.name}
        </p>
      </div>
    </>
  );
}
