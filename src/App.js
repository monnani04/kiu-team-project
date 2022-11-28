import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import Main from "./routes/Main";
import MyProfile from "./routes/MyProfile";
import ExampleRoute from "./routes/ExampleRoute";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
// import { faHatCowboy } from '@fortawesome/pro-thin-svg-icons'
import { faHatChef } from "@fortawesome/sharp-solid-svg-icons";
import Login from "./components/Login/Login";

library.add(fas, far, faTwitter, faFontAwesome, faHatChef);

import "swiper/css/bundle";
import ViewDetailBerth from "./routes/ViewDetailBerth";
import Profile from "./components/Main/MainContent/MainProfile/Profile";
import MyInfoContent from "./routes/MyInfoContent";
import Intro from "./routes/Intro";
import Test from "./routes/Test";
import { useEffect, useState } from "react";
import SearchArea from "./components/Main/MainContent/MainSearch/SearchArea";
import SearchDate from "./components/Main/MainContent/MainSearch/SearchDate";
import SearchNumber from "./components/Main/MainContent/MainSearch/SearchNumber";
import Search from "./components/Main/MainContent/MainSearch/Search";

function App() {
  // const [toggle, setToggle] = useState(false);

  // useEffect(() => {
  //   toggle === false
  //     ? (document.querySelector("html").style.filter = "invert(100%)")
  //     : (document.querySelector("html").style.filter = "invert(0%)");
  // }, [toggle]);

  return (
    <>
      {/* <button
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: "99999999",
        }}
        onClick={() => {
          toggle === false ? setToggle(true) : setToggle(false);
        }}
      >
        toggle
      </button> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/test" element={<Test />} />
          <Route path="/example" element={<ExampleRoute />} />
          <Route path="/main/*" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myprofile" element={<MyProfile />} />

          <Route path="/search" element={<Search />} />
          <Route path="/searcharea" element={<SearchArea />} />
          <Route path="/searchdate" element={<SearchDate />} />
          <Route path="/searchnumber" element={<SearchNumber />} />

          <Route path="/viewdetailberth/*" element={<ViewDetailBerth />} />

          <Route path="/viewdetailberth" element={<ViewDetailBerth />} />

          <Route path="/myinfocontent/*" element={<MyInfoContent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
