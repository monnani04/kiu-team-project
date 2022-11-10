import { useEffect, useState } from "react";
import Home from "./MainHome/Home";
import NotLogin from "./MainHome/NotLogin";
import Reservation from "./MainHome/Reservation";

export default function MainHome() {
  const [auth, setAuth] = useState(0);
  const [reser, setReser] = useState(0);

  useEffect(()=>{
    document.body.style.overflow = "auto";
  },[])
  return (
    <>
      <div>
        {
        auth === undefined 
        ? <NotLogin /> 
        : (reser === undefined
          ? <Home/>
          : <Reservation /> 
          ) 
        }
      </div>
    </>
  );
}
