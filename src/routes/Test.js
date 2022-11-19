import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export default function Test() {
  const [content, setContent] = useState(false);

  const contentRef = useRef();

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
  return (
    <>
      <div ref={contentRef}>
        <div>E-MAIL: {content.username}</div>
        <div>PW: {content.password}</div>
        <div>NAME: {content.nickName}</div>
      </div>
    </>
  );
}
