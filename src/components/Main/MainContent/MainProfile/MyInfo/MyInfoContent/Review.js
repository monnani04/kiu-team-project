import style from "../../../../../../css/Main/MainContent/MainProfile/MyInfo/MyInfoContent/Review.module.css";

import ReviewItem from "./ReviewItem";

export default function Review(props){
    return (<>
    <div className={style.wrap}>
          <div className={style.div}>
        <div className={style.list}>     
        <ReviewItem num="12개" name="성민이의 러브 하우스" date="10월 28일 ~ 11월 02일"/>
        <ReviewItem name="창표의 러브 하우스" date="10월 27일 ~ 11월 03일" />
        </div>
          </div>
        </div>
    </>);
}