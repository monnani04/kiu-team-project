import { useState } from "react";
import NoLogin from "./MainNotice/NoLogin";
import Notice from "./MainNotice/Notice";


export default function MainNotice(){
const [auth, setAuth] = useState(1);
    return(
        <>
        {auth === undefined ? <NoLogin /> : <Notice/>}
        </>
    )
}

