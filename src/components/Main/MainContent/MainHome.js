import { useEffect } from "react";
import Home from "./MainHome/Home";

export default function MainHome() {
  useEffect(()=>{
    document.body.style.overflow = "auto";
  },[])
  return (
    <>
      <div>
        <Home />
      </div>
    </>
  );
}
