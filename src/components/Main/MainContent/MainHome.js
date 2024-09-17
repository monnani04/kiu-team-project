import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./MainHome/Home";
import NotLogin from "./MainHome/NotLogin";
import Reservation from "./MainHome/Reservation";

export default function MainHome() {
  const [auth, setAuth] = useState();
  const [reserve, setReserve] = useState();

  const [reserveData, setReserveData] = useState();

  useEffect(() => {
    document.body.style.overflow = "auto";
    axios
      .get("/api/users/checkauthentication")
      .then((res) => {
        setAuth(true);
      })
      .catch((err) => {
        // console.dir(err);
        setAuth(false);
      });

    axios
      .get("/api/reservations")
      .then((res) => {
        // console.dir(res.data);
        setReserveData(res.data);
        res.data.length === 0 ? setReserve(false) : setReserve(true);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);
  return (
    <>
      <div>
        {auth === false ? (
          <NotLogin />
        ) : auth === true ? (
          reserve === undefined ? (
            false
          ) : reserve === false ? (
            <Home />
          ) : (
            <Reservation reserveData={reserveData}/>
          )
        ) : (
          false
        )}
      </div>
    </>
  );
}
