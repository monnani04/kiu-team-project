import style from "../../../../../css/Main/MainContent/MainProfile/MyInfo/MyInfoNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";


export default function MyInfoNav(){

    let navigate = useNavigate();

    return(<>
        <div className={style.wrap}>
            <div className={style.icon}>
                <FontAwesomeIcon onClick={()=>{navigate(`/myprofile`);}} icon="fa-solid fa-chevron-left" size="2x" />
            </div>
            <div className={style.myinfo}>
                <h1>내 정보 관리</h1>
            </div>
        </div>

        <div className={style.box}></div>

        <div className={style.myinfonav}>
                <div className={style.block}>개인 정보</div>
                <div className={style.block}>예약 확인</div>
                <div className={style.block}>나의 후기</div>
                <div className={style.block}>최근 본 숙소</div>
        </div>
    
    </>);
}