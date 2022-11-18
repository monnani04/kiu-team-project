import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../../css/ViewDetailBerth/RulesView.module.css";
import {
  RulesUIStateFunc,
  RulesUITopFunc,
  RulesUIDisplayFunc,
  RulesUIOpacityFunc,
} from "../../store/modules/RulesUIStateSlice";

export default function RulesView(props) {
  const RulesUIState = useSelector((state) => {
    return state.RulesUI;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    RulesUIState.state === false
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  }, [RulesUIState]);

  //   console.dir(props.info)

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: `${RulesUIState.top}`,
          left: 0,
          backgroundColor: `rgba(255,255,255,${RulesUIState.opacity})`,
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          zIndex: 99999,
          display: `${RulesUIState.display}`,
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
            dispatch(RulesUIStateFunc(false));
            dispatch(RulesUITopFunc("100%"));
            dispatch(RulesUIOpacityFunc(0));
            setTimeout(() => {
              dispatch(RulesUIDisplayFunc("none"));
            }, 500);
          }}
        />
        <div className={style.wrap}>
          <div className={style.title}>이용 규칙</div>
          <div className={style.item_wrap}>
            {props.info.rules.map((item, i) => {
              return <div className={style.rules} key={i}>{props.info.rules[i]}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
