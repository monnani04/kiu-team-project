import style from "../../../../css/Main/MainContent/MainSearch/NumberUnderVar.module.css";


export default function NumberUnderVar(){
    return(<>
        <div className={style.footerWrap}>
          <div className={style.payText}>
            <div style={{fontSize:"15px"}}>
              전체 삭제
            </div>
          </div>
          <div className={style.payBtn} onClick={() => {}}>
            검색
          </div>
        </div>
    </>);
} 