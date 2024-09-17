import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../../css/ViewDetailBerth/FacilitiesView.module.css";
import {
  FacilitiesUIStateFunc,
  FacilitiesUITopFunc,
  FacilitiesUIDisplayFunc,
  FacilitiesUIOpacityFunc,
} from "../../store/modules/FacilitiesUIStateSlice";

export default function FacilitiesView(props) {
  const FacilitiesUIState = useSelector((state) => {
    return state.FacilitiesUI;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    FacilitiesUIState.state === false
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  }, [FacilitiesUIState]);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: `${FacilitiesUIState.top}`,
          left: 0,
          backgroundColor: `rgba(255,255,255,${FacilitiesUIState.opacity})`,
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          zIndex: 99999,
          display: `${FacilitiesUIState.display}`,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 0.5s ease-in-out, top 0.5s ease-in-out",
        }}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-xmark"
          style={{
            position: "relative",
            top: 0,
            left: 0,
            zIndex: 99999,
            backgroundColor: "white",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            padding: "10px",
            marginBottom: "20px",
            boxShadow: "0 3px 6px rgba(0,0,0,0.3)",
          }}
          onClick={() => {
            dispatch(FacilitiesUIStateFunc(false));
            dispatch(FacilitiesUITopFunc("100%"));
            dispatch(FacilitiesUIOpacityFunc(0));
            setTimeout(() => {
              dispatch(FacilitiesUIDisplayFunc("none"));
            }, 500);
          }}
        />
        <div className={style.wrap}>
          <div className={style.title}>편의 시설</div>
          <div className={style.item_wrap}>
            {props.info.facilities.find((item) => item === "무선 인터넷") ===
            undefined ? (
              false
            ) : (
              <div className={style.item}>
                <FontAwesomeIcon icon="fa-solid fa-wifi" size="xl" />
                <span>무선 인터넷</span>
              </div>
            )}
            {props.info.facilities.find((item) => item === "TV") ===
            undefined ? (
              false
            ) : (
              <div className={style.item}>
                <FontAwesomeIcon icon="fa-solid fa-tv" size="xl" />
                <span>TV</span>
              </div>
            )}
            {props.info.facilities.find((item) => item === "주방") ===
            undefined ? (
              false
            ) : (
              <div className={style.item}>
                <FontAwesomeIcon icon="fa-solid fa-kitchen-set" size="xl" />
                <span>주방</span>
              </div>
            )}
            {props.info.facilities.find((item) => item === "화장실") ===
            undefined ? (
              false
            ) : (
              <div className={style.item}>
                <FontAwesomeIcon icon="fa-solid fa-faucet" size="xl" />
                <span>화장실</span>
              </div>
            )}
            {props.info.facilities.find((item) => item === "초인종") ===
            undefined ? (
              false
            ) : (
              <div className={style.item}>
                <FontAwesomeIcon icon="fa-solid fa-bell" size="xl" />
                <span>초인종</span>
              </div>
            )}
            {props.info.facilities.find((item) => item === "렌트 카") ===
            undefined ? (
              false
            ) : (
              <div className={style.item}>
                <FontAwesomeIcon icon="fa-solid fa-car" size="xl" />
                <span>렌트 카</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
