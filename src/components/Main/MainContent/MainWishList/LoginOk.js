import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useRef, useState } from "react";
import { useEffect } from "react";
import style from "../../../../css/Main/MainContent/MainWishList/LoginOk.module.css";
import WishItem from "./WishItem";

export default function LoginOk(props) {
  const [wishArr, setWishArr] = useState();

  const noWish = useRef();
  const wishWindow = useRef();

  useEffect(() => {
    axios
      .get("/api/hotels/wish")
      .then((res) => {
        // console.dir(res.data);
        setWishArr(res.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);

  useEffect(() => {
    wishArr === undefined
      ? false
      : wishArr.length === 0
      ? (noWish.current.style.display = "flex")
      : (wishWindow.current.style.display = "block");
  }, [wishArr]);
  return (
    <>
      <div
        style={{
          height:
            wishArr !== undefined && wishArr.length === 0 ? "100%" : undefined,
        }}
      >
        <div
          ref={noWish}
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
            icon="fa-solid fa-heart-circle-xmark"
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
            찜한 숙소가 없습니다
          </div>
        </div>

        <div
          ref={wishWindow}
          style={{
            display: "none",
          }}
        >
          <h2 className={style.wish}>위시 리스트 </h2>
          <div
            className={style.list}
            style={{
              height:
                wishArr !== undefined && wishArr.length === 0
                  ? "calc(100% - 295px)"
                  : undefined,
            }}
          >
            {wishArr === undefined
              ? false
              : wishArr.map((item, i) => {
                  // console.dir(item.titleImg)
                  return <WishItem key={i} item={item} />;
                })}
          </div>
        </div>
      </div>
    </>
  );
}
