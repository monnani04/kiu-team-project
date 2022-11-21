import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "../../css/ViewDetailBerth/Pay.module.css";
import { navStateFunc } from "../../store/modules/mainNavSlice";
import moment from "moment";
import "moment/locale/ko";

export default function Pay(props) {
  let navigate = useNavigate();

  // console.dir(props.info);
  // console.dir(moment(moment().format("YYYY-MM-DD"),"YYYY-MM-DD").add(7, 'days').format("YYYY-MM-DD"));

  const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"));
  const [endDate, setEndDate] = useState(moment(moment().format("YYYY-MM-DD"),"YYYY-MM-DD").add(7, 'days').format("YYYY-MM-DD"));

  const [applePay, setapplePay] = useState(false);
  const [samsungPay, setSamsungPay] = useState(false);
  const [kakaoPay, setKakaoPay] = useState(false);
  const [tossPay, setTossPay] = useState(false);

  const alert = useRef();
  const payItem4 = useRef();
  const payContentWrap = useRef();
  const loading = useRef();
  const PaySuccess = useRef();
  const payBtn = useRef();

  function payState(aState, sState, kState, tState) {
    setapplePay(aState);
    setSamsungPay(sState);
    setKakaoPay(kState);
    setTossPay(tState);
  }

  // redux mainNavSlice의 default state 가져오기
  const mainNavSlice = useSelector((state) => {
    // return state.스토어에서가져오고자 하는 state이름 선택.value;
    return state.mainNav.value;
  });
  // redux state 변경 함수
  const dispatch = useDispatch();

  const [content, setContent] = useState(false);
  useEffect(() => {
    axios
      .post("/api/users/userinfo")
      .then((res) => {
        // console.dir(res.data);
        setContent(res.data);
      })
      .catch((err) => {
        setContent(err);
      });
  }, []);

  return (
    <>
      <div
        className={style.wrap}
        style={{
          left: `${props.left}`,
        }}
      >
        <div className={style.backBtn}>
          <FontAwesomeIcon
            icon="fa-solid fa-chevron-left"
            size="xl"
            onClick={() => {
              props.setPayLeft("100%");
              document.body.style.overflow = "auto";
            }}
          />
        </div>
        <div className={style.title}>예약하기</div>

        <div
          ref={payContentWrap}
          className={style.payContentWrap}
          style={{
            display: "block",
          }}
        >
          <div className={style.payItem1}>
            <div>
              <h4>{props.info.name}</h4>
              <div>호스트 명 - {props.info.hostName}</div>
              <div>예약자 명 - {content.nickname}</div>
            </div>
            <div
              style={{
                backgroundImage: `url(../../img/${props.info.titleImg[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "50%"
              }}
            ></div>
          </div>
          <div className={style.payItem2}>
            <div className={style.payItem2_wrap}>
              <h4>예약 정보</h4>
              <div className={style.dateWrap}>
                <div>
                  <div>날짜</div>
                  {/* <label htmlFor="startDate">start: </label> */}
                  <input
                    type="date"
                    id="startDate"
                    className={style.startDate}
                    defaultValue={startDate}
                    disabled
                  />{" "}
                  ~{/* <label htmlFor="endDate">end: </label> */}
                  <input
                    type="date"
                    id="endDate"
                    className={style.endDate}
                    defaultValue={endDate}
                    disabled
                  />
                </div>
                <div
                  style={{
                    textDecoration: "underline",
                    // width:"60px"
                  }}
                  onClick={(e) => {
                    e.currentTarget.innerText === "수정"
                      ? ((e.currentTarget.previousSibling.childNodes[1].disabled = false),
                        (e.currentTarget.previousSibling.childNodes[4].disabled = false),
                        (e.currentTarget.innerText = "저장"))
                      : ((e.currentTarget.previousSibling.childNodes[1].disabled = true),
                        (e.currentTarget.previousSibling.childNodes[4].disabled = true),
                        (e.currentTarget.innerText = "수정"));
                  }}
                >
                  수정
                </div>
              </div>
              <div className={style.guestWrap}>
                <div>
                  <div>게스트</div>
                  <span>성인 - </span>
                  <input
                    type="number"
                    defaultValue="2"
                    className={style.adult_num}
                    readOnly
                  />

                  <span>아동 - </span>
                  <input
                    type="number"
                    defaultValue="2"
                    className={style.children_num}
                    readOnly
                  />
                </div>
                <div
                  style={{
                    textDecoration: "underline",
                  }}
                  onClick={(e) => {
                    e.currentTarget.innerText === "수정"
                      ? ((e.currentTarget.previousSibling.childNodes[2].readOnly = false),
                        (e.currentTarget.previousSibling.childNodes[4].readOnly = false),
                        e.currentTarget.previousSibling.childNodes[2].focus(),
                        (e.currentTarget.innerText = "저장"))
                      : ((e.currentTarget.previousSibling.childNodes[2].readOnly = true),
                        (e.currentTarget.previousSibling.childNodes[4].readOnly = true),
                        (e.currentTarget.innerText = "수정"));
                  }}
                >
                  수정
                </div>
              </div>
            </div>
          </div>
          <div ref={payItem4} className={style.payItem4}>
            <div className={style.payItem4_wrap}>
              <div
                className={style.payImg_wrap}
                style={{
                  backgroundImage: "url(../../img/apple.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "51px 23px",
                  backgroundPosition: "50% 50%",
                  backgroundColor: applePay
                    ? "rgb(230,230,240)"
                    : "transparent",
                }}
                onClick={() => {
                  payState(true, false, false, false);
                }}
              ></div>
              <div
                className={style.payImg_wrap}
                style={{
                  backgroundImage: "url(../../img/samsung.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "134px 90px",
                  backgroundPosition: "50% 50%",
                  backgroundColor: samsungPay
                    ? "rgb(230,230,240)"
                    : "transparent",
                }}
                onClick={() => {
                  payState(false, true, false, false);
                }}
              ></div>
            </div>
            <div className={style.payItem4_wrap}>
              <div
                className={style.payImg_wrap}
                style={{
                  backgroundImage: "url(../../img/kakao.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "80px 32px",
                  backgroundPosition: "50% 50%",
                  backgroundColor: kakaoPay
                    ? "rgb(230,230,240)"
                    : "transparent",
                }}
                onClick={() => {
                  payState(false, false, true, false);
                }}
              ></div>
              <div
                className={style.payImg_wrap}
                style={{
                  backgroundImage: "url(../../img/toss.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "104px 20px",
                  backgroundPosition: "50% 50%",
                  backgroundColor: tossPay ? "rgb(230,230,240)" : "transparent",
                }}
                onClick={() => {
                  payState(false, false, false, true);
                }}
              ></div>
            </div>
          </div>
          <div className={style.payItem3}>
            <div className={style.payItem3_wrap}>
              <h4>요금 세부정보</h4>
              <div className={style.payItem3_box}>
                <div>₩ {Number(props.info.price).toLocaleString("ko-KR")} ✕ 13박</div>
                <div>{Number(props.info.price * 13).toLocaleString("ko-KR")} ₩</div>
              </div>
              <div className={style.payItem3_box}>
                <div>청소비</div>
                <div>7,000 ₩</div>
              </div>
              <div className={style.payItem3_box}>
                <div>서비스 수수료</div>
                <div>30,000 ₩</div>
              </div>
              <div className={style.payItem3_box}>
                <div>합계 ( USD )</div>
                <div>{Number(props.info.price * 13 + 7000 + 30000).toLocaleString("ko-KR")} ₩</div>
              </div>
            </div>
          </div>
        </div>

        <div ref={loading} className={style.loading} />

        <div ref={PaySuccess} className={style.PaySuccess}>
          <div className={style.PaySuccess_box}>
            <FontAwesomeIcon
              icon="fa-solid fa-check"
              size="10x"
              color="#5DFF00"
              style={{
                filter: "drop-shadow(0px 3px 3px rgba(0,0,0,0.16))",
              }}
            />
            <h4>예약이</h4>
            <h4>완료되었습니다</h4>
          </div>
          <div
            className={style.homeBtn}
            onClick={() => {
              dispatch(navStateFunc("home"));
              navigate("/main");
            }}
          >
            홈으로
          </div>
        </div>

        <div className={style.footerWrap}>
          <div
            ref={payBtn}
            className={style.payBtn}
            onClick={() => {
              applePay === true ||
              samsungPay === true ||
              kakaoPay === true ||
              tossPay === true
                ? ((payContentWrap.current.style.display = "none"),
                  (payBtn.current.style.display = "none"),
                  (loading.current.style.display = "block"),
                  setTimeout(() => {
                    loading.current.style.display = "none";
                    PaySuccess.current.style.display = "flex";
                  }, 2000))
                : (alert.current.style.display = "flex");

              console.dir();
            }}
          >
            예약하기
          </div>
        </div>

        <div
          ref={alert}
          className={style.alert}
          style={{
            display: "none",
          }}
        >
          <div>
            결제 수단을 <br /> 선택해주세요
          </div>
          <div
            onClick={(e) => {
              alert.current.style.display = "none";
              payItem4.current.focus();
            }}
          >
            확인
          </div>
        </div>
      </div>
    </>
  );
}
