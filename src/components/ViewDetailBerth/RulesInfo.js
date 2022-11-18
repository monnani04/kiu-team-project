import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import style from "../../css/ViewDetailBerth/ViewDetailBerthMain.module.css";
import {
    RulesUIStateFunc,
    RulesUITopFunc,
    RulesUIDisplayFunc,
    RulesUIOpacityFunc,
  } from "../../store/modules/RulesUIStateSlice";

export default function RulesInfo(props) {

  const dispatch = useDispatch();
  return (
    <>
      <div className={style.RulesInfoWrap}>
        <div className={style.rules_title}>숙소 이용규칙</div>
        <div className={style.content_wrap}>
          <div className={style.rules_content}>
            {props.info.rules.map((item, i) => {
              return (
                  <div key={i}>{props.info.rules[i]}</div>
              );
            })}
          </div>
          <FontAwesomeIcon icon="fa-solid fa-chevron-right" onClick={()=>{
            dispatch(RulesUIDisplayFunc("flex"));
            setTimeout(() => {
              dispatch(RulesUIStateFunc(true));
              dispatch(RulesUITopFunc(0));
              dispatch(RulesUIOpacityFunc(0.5));
            }, 100);
          }}/>
        </div>

        <div></div>
      </div>
    </>
  );
}
