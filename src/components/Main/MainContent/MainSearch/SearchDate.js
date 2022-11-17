import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import style from "../../../../css/Main/MainContent/MainSearch/SearchDate.module.css";
import DateUnderVar from "./DateUnderVar";
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { ko } from "date-fns/locale";


export default function SearchDate() { 
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    return(<>
        <div>
            <div className={style.backBtn}>
                <Link to={`/main/search`}>
                <FontAwesomeIcon icon="fa-solid fa-chevron-left"  />
                </Link>
            </div>
            <div className={style.areabox}>
                <div style={{float:"left"}}>지역</div>
                <div style={{float:"right"}}>대구</div>
            </div>
            <div className={style.datebox}>
                <div>
                    <span className={style.date}>날짜를 선택하세요.</span>
                    <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className={style.cal}
                        locale={ko}
                        style={{width:"auto", height:"auto"}}
                    />
                </div>
            </div>
            </div>
            <DateUnderVar />        
    </>);
}