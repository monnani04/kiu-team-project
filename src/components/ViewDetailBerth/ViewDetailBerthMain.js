import style from "../../css/ViewDetailBerth/ViewDetailBerthMain.module.css";
import ViewDetailBerthSwiper from "./ViewDetailBerthSwiper";

export default function ViewDetailBerthMain(props) {

  const ImgArr = props.state.titleImg;
//   console.log(ImgArr);
  return (
    <>
      <div className={style.wrap}>
        <ViewDetailBerthSwiper imgArr = {ImgArr}/>
      </div>
    </>
  );
}
