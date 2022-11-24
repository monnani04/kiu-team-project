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
                    name={item.name}
                    name2={item.name2}
                    img={item.titleImg}
                  />
                );
              })}
          {/* <WishItem title="성민이의 러브 하우스1" />
          <WishItem title="성민이의 러브 하우스2" />
          <WishItem title="성민이의 러브 하우스3" />
          <WishItem title="성민이의 러브 하우스4" />
          <WishItem title="성민이의 러브 하우스5" />
          <WishItem title="성민이의 러브 하우스6" /> */}
        </div>
      </div>
    </>
  );
}
