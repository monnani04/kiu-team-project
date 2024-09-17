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

  // console.dir(props)

  // console.dir(props.info);
  // console.dir(moment(moment().format("YYYY-MM-DD"),"YYYY-MM-DD").add(7, 'days').format("YYYY-MM-DD"));

  // const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"));
  // const [endDate, setEndDate] = useState(moment(moment().format("YYYY-MM-DD"),"YYYY-MM-DD").add(7, 'days').format("YYYY-MM-DD"));

  // console.log(moment(new Date(new Date().getTime() + 86400000)).format("YYYY-MM-DD"))

  const [date1, setDate1] = useState(
    sessionStorage.searchData === undefined
      ? new Date()
      : new Date(JSON.parse(sessionStorage.searchData).date.startDate)
  );
  const [date2, setDate2] = useState(
    sessionStorage.searchData === undefined
      ? new Date(new Date().getTime() + 86400000)
      : new Date(JSON.parse(sessionStorage.searchData).date.endDate)
  );

  const [startDate, setStartDate] = useState(
    sessionStorage.searchData === undefined
      ? moment(new Date()).format("YYYY-MM-DD")
      : moment(
          new Date(JSON.parse(sessionStorage.searchData).date.startDate)
        ).format("YYYY-MM-DD")
  );
  const [endDate, setEndDate] = useState(
    sessionStorage.searchData === undefined
      ? moment(new Date(new Date().getTime() + 86400000)).format("YYYY-MM-DD")
      : moment(
          new Date(JSON.parse(sessionStorage.searchData).date.endDate)
        ).format("YYYY-MM-DD")
  );

  const [dateDiff1, setDateDiff1] = useState(new Date(startDate));
  const [dateDiff2, setDateDiff2] = useState(new Date(endDate));
  const [dateDiffResult, setDateDiffResult] = useState(
    Math.abs(
      (dateDiff1.getTime() - dateDiff2.getTime()) / (1000 * 60 * 60 * 24)
    )
  );

  useEffect(() => {
    // console.log(dateDiffResult);
    setDateDiff1(new Date(startDate));
    setDateDiff2(new Date(endDate));
  }, [startDate, endDate]);

  useEffect(() => {
    setDateDiffResult(
      Math.abs(
        (dateDiff1.getTime() - dateDiff2.getTime()) / (1000 * 60 * 60 * 24)
      )
    );
  }, [dateDiff1, dateDiff2]);

  const [date1Year, setDate1Year] = useState(date1.getFullYear());
  const [date1Month, setDate1Monthr] = useState(date1.getMonth() + 1);
  const [date1Date, setDate1Date] = useState(date1.getDate());

  const [date2Year, setDate2Year] = useState(date2.getFullYear());
  const [date2Month, setDate2Monthr] = useState(date2.getMonth() + 1);
  const [date2Date, setDate2Date] = useState(date2.getDate());

  const [adult, setAdult] = useState(
    sessionStorage.searchData === undefined
      ? 1
      : JSON.parse(sessionStorage.searchData).options.adult
  );
  const [child, setChild] = useState(
    sessionStorage.searchData === undefined
      ? 0
      : JSON.parse(sessionStorage.searchData).options.children
  );

  useEffect(() => {
    // console.dir(adult)
    // console.dir(child)
  }, [adult, child]);

  const [applePay, setapplePay] = useState(false);
  const [samsungPay, setSamsungPay] = useState(false);
  const [kakaoPay, setKakaoPay] = useState(false);
  const [tossPay, setTossPay] = useState(false);

  const [payOption, setPayOption] = useState();

  const backBtn = useRef();
  const alert = useRef();
  const payItem4 = useRef();
  const payContentWrap = useRef();
  const loading = useRef();
  const PaySuccess = useRef();
  const PayFail = useRef();
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

  const [checkData, setCheckData] = useState({
    startDate: new Date(startDate).toISOString(),
    endDate: new Date(endDate).toISOString(),
  });

  const [payData, setPayData] = useState({
    adult: adult,
    children: child,
    pay: payOption,
    alarm: true,
    startDate: new Date(startDate).toISOString(),
    endDate: new Date(endDate).toISOString(),
  });

  useEffect(() => {
    setCheckData({
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
    });
  }, [startDate, endDate]);

  useEffect(() => {
    setPayData({
      adult: adult,
      children: child,
      pay: payOption,
      alarm: true,
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
    });
  }, [adult, child, payOption, startDate, endDate]);

  async function PaySubmit() {
    // console.dir(payData);
    (payContentWrap.current.style.display = "none"),
      (payBtn.current.style.display = "none"),
      (loading.current.style.display = "block"),
      (backBtn.current.style.display = "none"),
      axios({
        method: "post",
        url: `/api/reservations/check/${props.info._id}`,
        data: JSON.stringify(checkData),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          withCredentials: true,
          crossDomain: true,
          credentials: true,
        },
      })
        .then((res) => {
          // console.dir(res.data);
          res.data === false
            ? setTimeout(() => {
              loading.current.style.display = "none";
              PayFail.current.style.display = "flex";
            }, 2000)
            : axios({
                method: "post",
                url: `/api/reservations/${props.info._id}`,
                data: JSON.stringify(payData),
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                  withCredentials: true,
                  crossDomain: true,
                  credentials: true,
                },
              })
                .then((res) => {
                  console.dir(res);
                })
                .then(() => {
                  setTimeout(() => {
                    loading.current.style.display = "none";
                    PaySuccess.current.style.display = "flex";
                  }, 2000);
                })
                .catch((err) => {
                  console.dir(err);
                });
          // res.data.length === 0 ? console.log("okay!") : console.log("no!")
        })
        .catch((err) => {
          console.dir(err);
        });

    // axios({
    //   method: "post",
    //   url: `/api/reservations/${props.info._id}`,
    //   data: JSON.stringify(payData),
    //   headers: {
    //     "Content-Type": "application/json; charset=utf-8",
    //     withCredentials: true,
    //     crossDomain: true,
    //     credentials: true,
    //   },
    // }).then((res)=>{
    //   console.dir(res);
    // }).then(()=>{
    //   setTimeout(() => {
    //     loading.current.style.display = "none";
    //     PaySuccess.current.style.display = "flex";
    //   }, 2000)
    // })
    // .catch((err)=>{
    //   console.dir(err)
    // })
  }

  return (
    <>
      <div
        className={style.wrap}
        style={{
          left: `${props.left}`,
        }}
      >
        <div ref={backBtn} className={style.backBtn}>
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
                backgroundPosition: "50%",
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
                    min={startDate}
                    disabled
                    onChange={(e) => {
                      // console.dir(e.currentTarget.valueAsDate);
                      setStartDate(
                        moment(e.currentTarget.valueAsDate).format("YYYY-MM-DD")
                      );
                    }}
                  />{" "}
                  ~{/* <label htmlFor="endDate">end: </label> */}
                  <input
                    type="date"
                    id="endDate"
                    className={style.endDate}
                    defaultValue={endDate}
                    min={startDate}
                    disabled
                    onChange={(e) => {
                      // console.dir(e.currentTarget.valueAsDate);
                      setEndDate(
                        moment(e.currentTarget.valueAsDate).format("YYYY-MM-DD")
                      );
                    }}
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
                    defaultValue={adult}
                    className={style.adult_num}
                    readOnly
                    onChange={(e) => {
                      // console.dir(e.currentTarget.valueAsNumber)
                      setAdult(e.currentTarget.valueAsNumber);
                    }}
                  />

                  <span>아동 - </span>
                  <input
                    type="number"
                    defaultValue={child}
                    className={style.children_num}
                    readOnly
                    onChange={(e) => {
                      // console.dir(e.currentTarget.valueAsNumber)
                      setChild(e.currentTarget.valueAsNumber);
                    }}
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
                  setPayOption("applePay");
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
                  setPayOption("samsungPay");
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
                  setPayOption("kakaoPay");
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
                  setPayOption("tossPay");
                  payState(false, false, false, true);
                }}
              ></div>
            </div>
          </div>
          <div className={style.payItem3}>
            <div className={style.payItem3_wrap}>
              <h4>요금 세부정보</h4>
              <div className={style.payItem3_box}>
                <div>
                  ₩ {Number(props.info.price).toLocaleString("ko-KR")} ✕{" "}
                  {dateDiffResult}박
                </div>
                <div>
                  {Number(props.info.price * dateDiffResult).toLocaleString(
                    "ko-KR"
                  )}{" "}
                  ₩
                </div>
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
                <div>
                  {Number(
                    props.info.price * dateDiffResult + 7000 + 30000
                  ).toLocaleString("ko-KR")}{" "}
                  ₩
                </div>
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

        <div ref={PayFail} className={style.PaySuccess}>
          <div className={style.PaySuccess_box}>
            <FontAwesomeIcon
              icon="fa-solid fa-xmark"
              size="10x"
              color="#a53939"
              style={{
                filter: "drop-shadow(0px 3px 3px rgba(0,0,0,0.16))",
              }}
            />
            <h4>예약에</h4>
            <h4>실패했습니다.</h4>
            <small>원인 : 날짜 중복</small>
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
                ? PaySubmit()
                : // setTimeout(() => {
                  //   loading.current.style.display = "none";
                  //   PaySuccess.current.style.display = "flex";
                  // }, 2000)
                  (alert.current.style.display = "flex");
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
