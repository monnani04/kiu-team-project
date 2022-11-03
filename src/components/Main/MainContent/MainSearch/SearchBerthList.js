import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import style from "../../../../css/Main/MainContent/MainSearch/SearchBerthList.module.css";
import berthList from "../../../../dummydata/BerthList.json";

export default function SearchBearthList(){

    console.log(berthList);

    const SearchMapBtnState = useSelector((state) => {
        // return state.스토어에서가져오고자 하는 state이름 선택.value;
        return state.SearchMapBtn.value;
      });

    const wrapRef = useRef();
    useEffect(()=>{
        if(SearchMapBtnState === false){
            // console.log(false);
        } else{
            wrapRef.current.style.top = "60%";
        }
    },[SearchMapBtnState])
    return(
        <>
            <div ref={wrapRef} className={style.wrap}>
                <div className={style.slideBtn}></div>
                <div className={style.itemWrap}>

                </div>
            </div>
        </>
    )
}