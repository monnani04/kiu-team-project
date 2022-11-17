import style from "../../../../css/Main/MainContent/MainSearch/DateUnderVar.module.css";


export default function DateUnderVar(){
    return(<>
        <div className={style.footerWrap}>
          <div className={style.payText}>
            <div style={{fontSize:"15px"}}>
              전체 삭제
            </div>
          </div>
          <div className={style.payBtn} onClick={() => {}}>
            다음
          </div>
        </div>
    </>);
} 