import { useRef } from "react";
import style from "../../../../../../css/Main/MainContent/MainProfile/MyInfo/MyInfoContent/PersonalInfo.module.css"

export default function PersonalInfo(){
    const emailInput = useRef();
    return (<>
        <div className={style.imgdiv}>
            <div className={style.imgback}>
                <img className={style.img} src="/img/icon/LAMAH3.svg"></img>
            </div>
        </div>

        {/* <div>
            <input type="email" value="lamahroot@lamah.com"></input>
        </div> */}
    
        <div className={style.blockbox}>
            <div className={style.block0} onClick={()=>{
                console.dir(emailInput.current)
                emailInput.current.focus()
            }}>
                <div style={{fontSize : "12px", color: "gray"}}>이메일</div>
                <input ref={emailInput} className={style.input} type="email" placeholder="lamahroot@lamah.com"></input>
            </div>

            <div className={style.block} onClick={(e)=>{
                console.dir(e.currentTarget.childNodes[1])
                e.currentTarget.childNodes[1].focus()
            }}>
                <div style={{fontSize : "12px", color: "gray"}}>비밀번호</div>
                <input className={style.input} type="email" placeholder="**********"></input>
            </div>

            <div className={style.block} onClick={(e)=>{
                console.dir(e.currentTarget.childNodes[1])
                e.currentTarget.childNodes[1].focus()
            }}>
                <div style={{fontSize : "12px", color: "gray"}}>비밀번호 확인</div>
                <input className={style.input} type="email" placeholder="**********"></input>
            </div>

            <div className={style.block} onClick={(e)=>{
                console.dir(e.currentTarget.childNodes[1])
                e.currentTarget.childNodes[1].focus()
            }}>
                <div style={{fontSize : "12px", color: "gray"}}>별명</div>
                <input className={style.input} type="email" placeholder="라마 관리자"></input>
            </div>
        </div>

        <button className={style.button}>저장</button>


    </>);
}