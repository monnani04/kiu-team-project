import { useNavigate } from "react-router-dom";
import style from "../../css/ViewDetailBerth/ViewDetailBerthMain.module.css";

export default function FooterComponent(props) {
  let navigate = useNavigate();
  // console.dir(props.info);
  return (
    <>
      <div className={style.footerEmpty}></div>
      <div className={style.footerWrap}>
        <div className={style.payText}>
          <div>{"₩" +
            Number(props.info.price).toLocaleString("ko-KR") +
            " / 박"}</div>
            <div>12월 12일 ~ 12월 25일</div>
        </div>
        <div className={style.payBtn} onClick={()=>{
          props.setPayLeft("0");
          document.body.style.overflow="hidden";
        }}>예약하기</div>
      </div>
    </>
  );
}
