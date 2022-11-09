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

library.add(fas,far, faTwitter, faFontAwesome, faHatChef);

import "swiper/css/bundle";
import ViewDetailBerth from "./routes/ViewDetailBerth";
import MyInfo from "./routes/MyInfo";
import Profile from "./components/Main/MainContent/MainProfile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/example" element={<ExampleRoute />} />
          <Route path="/main/*" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/viewdetailberth" element={<ViewDetailBerth/>} />
          <Route path="/myinfo/*" element={<MyInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
