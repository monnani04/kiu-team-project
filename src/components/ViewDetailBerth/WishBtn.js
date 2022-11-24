import style from "../../css/ViewDetailBerth/ViewDetailBerthMain.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function WishBtn(props) {
  const [colorState, setColorState] = useState(false);

  useEffect(() => {
    props.wishState.filter((word) => word === props.info._id)
      .length === 0
      ? false
      : setColorState(true);
  }, []);
  
  const [color, setColor] = useState("rgba(0,0,0,0.1)");

  // console.dir(props.wishState)

  

  useEffect(() => {
    colorState === false
      ? (setColor("rgba(0,0,0,0.1)"),
        axios
          .put(`/api/users/unwishHotel/${props.info._id}`)
          .then((res) => {
            // console.dir(res);
          })
          .catch((err) => {
            console.dir(err);
          }))
      : (setColor("red"),
        axios
          .put(`/api/users/wishHotel/${props.info._id}`)
          .then((res) => {
            // console.dir(res);
          })
          .catch((err) => {
            console.dir(err);
          }));
  }, [colorState]);

  return (
    <>
      <div
        className={style.wishBtn}
        onClick={() => {
          colorState === false ? setColorState(true) : setColorState(false);
        }}
      >
        <FontAwesomeIcon
          className={style.wishBtnItem1}
          icon="fa-solid fa-heart"
          color={color}
          size="xl"
        />
        <FontAwesomeIcon
          className={style.wishBtnItem2}
          icon="fa-regular fa-heart"
          color="rgb(255,255,255)"
          size="xl"
        />
      </div>
    </>
  );
}
