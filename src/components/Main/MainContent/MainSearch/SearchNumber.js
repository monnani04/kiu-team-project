import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import style from "../../../../css/Main/MainContent/MainSearch/SearchNumber.module.css";
import NumberUnderVar from "./NumberUnderVar";


export default function SearchNumber() {
    return(<>
        <div>
        <div className={style.backBtn}>
                <Link to={`/main/search`}>
                <FontAwesomeIcon icon="fa-solid fa-chevron-left"  />
                </Link>
            </div>
        </div>
        <NumberUnderVar />
    </>);
}