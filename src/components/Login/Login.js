
import style from "../../css/Login/Login.module.css";

export default function Login() {
  return (
    <>
      <div className={style.wrap}>
        <h1>LAMAH</h1>
        
        <input type="email" placeholder="E-mail을 입력하세요" />

        <input type="password" placeholder="비밀번호를 입력하세요" />

        <div className={style.CheckboxWrap}>
            <div>
            <input type="checkbox" className={style.checkbox1}/>
            E-mail 저장 &nbsp;&nbsp;
            </div>
            <div>
            <input type="checkbox" />
            자동 로그인
            </div>
        </div>

        <button className={style.button1}>LAMAH E-mail 로 그 인</button>
        <button className={style.button2}>LAMAH 회 원 가 입</button>

        <div className={style.findBtnGroup}>
          <div className={style.findBtn1}>
            <img
              className={style.email}
              src="/img/icon/envelope-solid.svg"
            ></img>
            <p>E-mail 찾기</p>
          </div>
          <div className={style.findBtn2}>
            <img className={style.password} src="/img/icon/key-solid.svg"></img>
            <p>비밀번호 찾기</p>
          </div>
        </div>
        
      </div>
    </>
  );
}
