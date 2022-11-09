import style from "../css/Main/MainContent/MainProfile/MyInfo.module.css";
import { useNavigate } from "react-router-dom";
import MyInfoNav from "../components/Main/MainContent/MainProfile/MyInfo/MyInfoNav";

export default function MyInfo(){
    let navigate = useNavigate();

    return(<>
        <MyInfoNav></MyInfoNav>
        
    </>);
}