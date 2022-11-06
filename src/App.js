import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import Main from "./routes/Main";
import MyProfile from "./routes/MyProfile";


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
// import { faHatCowboy } from '@fortawesome/pro-thin-svg-icons'
import { faHatChef } from '@fortawesome/sharp-solid-svg-icons'
import Login from "./components/Login/Login";

library.add(fas, faTwitter, faFontAwesome, faHatChef);

import "swiper/css/bundle";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/example" element={<ExampleRoute />} />
          <Route path="/main/*" element={<Main />} />
          <Route path="/myprofile" element={<MyProfile />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
