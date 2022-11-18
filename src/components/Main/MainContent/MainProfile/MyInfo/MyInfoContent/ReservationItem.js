import style from "../../../../../../css/Main/MainContent/MainProfile/MyInfo/MyInfoContent/ReservationItem.module.css";
import ReservationInfo from "../../../../../../dummydata/ReservationInfo.json";

export default function ReservationItem(props) {

  const ReservationInformation = ReservationInfo.data;

  return (
    <>
      <div className={style.wrap}>
        {ReservationInformation.map((item, i)=>{
          return(<div key={i}>
            <div  className={style.wrap}>
              <h1 className={style.date}>{item.date}</h1>
              <button className={style.button}>취소</button>
            </div>

            <div className={style.box}>
              <div className={style.sbox}>
                <h1 className={style.stitle}>{item.notice}</h1>
                <p className={style.infop}>{item.content}</p>
                <p className={style.infop}>{item.days}</p>
                <p className={style.infop2}>{item.people}</p>
              </div>
              <div className={style.imgbox}>
                <img className={style.img} src={item.localImg}></img>
              </div>
            </div>    
          </div>);
        })}
          
      </div>
    </>
  );
}
