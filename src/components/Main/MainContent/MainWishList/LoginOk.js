import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import style from "../../../../css/Main/MainContent/MainWishList/LoginOk.module.css";
import WishItem from "./WishItem";

export default function LoginOk(props) {
  const [wishArr, setWishArr] = useState();

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
  return (
    <>
      <div>
        <h2 className={style.wish}>위시 리스트 </h2>
        <div className={style.list}>
          {wishArr === undefined
            ? false
            : wishArr.map((item, i) => {
                // console.dir(item.titleImg)
                return (
                  <WishItem
                    key={i}
                    item={item}
                  />
                );
              })}
          
        </div>
      </div>
    </>
  );
}
