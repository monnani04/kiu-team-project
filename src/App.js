import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import ExampleRoute from "./routes/ExampleRoute";
import Main from "./routes/Main";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
// import { faHatCowboy } from '@fortawesome/pro-thin-svg-icons'
import { faHatChef } from '@fortawesome/sharp-solid-svg-icons'

library.add(fas, faTwitter, faFontAwesome, faHatChef)

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/example" element={<ExampleRoute />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
