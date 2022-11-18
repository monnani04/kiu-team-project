import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ReviewUIStateFunc,
  ReviewUITopFunc,
  ReviewUIDisplayFunc,
  ReviewUIOpacityFunc,
} from "../../store/modules/ReviewUIStateSlice";
import { useEffect, useState } from "react";
import style from "../../css/ViewDetailBerth/ReviewWrite.module.css";
import { useRef } from "react";

export default function ReviewWrite() {
  const ReviewUIState = useSelector((state) => {
    return state.ReviewUI;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    ReviewUIState.state === false
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  }, [ReviewUIState]);

  const [starColor1, setStarColor1] = useState("gray");
  const [starColor2, setStarColor2] = useState("gray");
  const [starColor3, setStarColor3] = useState("gray");
  const [starColor4, setStarColor4] = useState("gray");
  const [starColor5, setStarColor5] = useState("gray");

  const [starState, setStarState] = useState(false);

  function starHandler1() {
    setStarColor1("#FFAF0E");
    setStarColor2("gray");
    setStarColor3("gray");
    setStarColor4("gray");
    setStarColor5("gray");
    setStarState(1);
  }
  function starHandler2() {
    setStarColor1("#FFAF0E");
    setStarColor2("#FFAF0E");
    setStarColor3("gray");
    setStarColor4("gray");
    setStarColor5("gray");
    setStarState(2);
  }
  function starHandler3() {
    setStarColor1("#FFAF0E");
    setStarColor2("#FFAF0E");
    setStarColor3("#FFAF0E");
    setStarColor4("gray");
    setStarColor5("gray");
    setStarState(3);
  }
  function starHandler4() {
    setStarColor1("#FFAF0E");
    setStarColor2("#FFAF0E");
    setStarColor3("#FFAF0E");
    setStarColor4("#FFAF0E");
    setStarColor5("gray");
    setStarState(4);
  }
  function starHandler5() {
    setStarColor1("#FFAF0E");
    setStarColor2("#FFAF0E");
    setStarColor3("#FFAF0E");
    setStarColor4("#FFAF0E");
    setStarColor5("#FFAF0E");
    setStarState(5);
  }

  const textarea = useRef();
  const alertRef = useRef();

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: `${ReviewUIState.top}`,
          left: 0,
          backgroundColor: `rgba(255,255,255,${ReviewUIState.opacity})`,
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          zIndex: 99999,
          display: `${ReviewUIState.display}`,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 0.5s ease-in-out, top 0.5s ease-in-out",
        }}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-xmark"
          style={{
            position: "relative",
            top: 0,
            left: 0,
            zIndex: 99999,
            backgroundColor: "white",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            padding: "10px",
            marginBottom: "20px",
            boxShadow: "0 3px 6px rgba(0,0,0,0.3)",
          }}
          onClick={() => {
            dispatch(ReviewUIStateFunc(false));
            dispatch(ReviewUITopFunc("100%"));
            dispatch(ReviewUIOpacityFunc(0));
            setTimeout(() => {
              dispatch(ReviewUIDisplayFunc("none"));
            }, 500);
          }}
        />
        <div className={style.wrap}>
          <div className={style.title}>후기 작성</div>
          <div className={style.starWrap}>
            <FontAwesomeIcon
              icon="fa-solid fa-star"
              color={starColor1}
              size="2x"
              onClick={starHandler1}
            />
            <FontAwesomeIcon
              icon="fa-solid fa-star"
              color={starColor2}
              size="2x"
              onClick={starHandler2}
            />
            <FontAwesomeIcon
              icon="fa-solid fa-star"
              color={starColor3}
              size="2x"
              onClick={starHandler3}
            />
            <FontAwesomeIcon
              icon="fa-solid fa-star"
              color={starColor4}
              size="2x"
              onClick={starHandler4}
            />
            <FontAwesomeIcon
              icon="fa-solid fa-star"
              color={starColor5}
              size="2x"
              onClick={starHandler5}
            />
          </div>
          <div
            style={{ borderTop: "2px solid rgb(230,230,230)", width: "100%" }}
          ></div>
          <textarea
            ref={textarea}
            placeholder="후기를 작성해주세요."
            className={style.textarea}
          ></textarea>
          <div
            className={style.submit}
            onClick={() => {
              starState === false || textarea.current.value === ""
                ? ((alertRef.current.style.display = "block"),
                  setTimeout(() => {
                    alertRef.current.style.opacity = 1;
                  }, 100),
                  setTimeout(() => {
                    alertRef.current.style.opacity = 0;
                  }, 2000),
                  setTimeout(() => {
                    alertRef.current.style.display = "none";
                  }, 2500))
                : location.reload();
            }}
          >
            작성 하기
          </div>
        </div>
        <div
          ref={alertRef}
          className={style.alert}
          style={{
            display: "none",
            opacity: 0,
          }}
        >
          별점 선택과 후기 작성을 해주세요.
        </div>
      </div>
    </>
  );
}
