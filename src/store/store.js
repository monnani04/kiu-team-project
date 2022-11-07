import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";

import exampleReducer from "./modules/exampleSlice";
import mainNavReducer from "./modules/mainNavSlice";
import SearchMapBtnReducer from "./modules/SearchMapBtnSlice";

export const store = configureStore({
  reducer: {
    //이름(변수와 비슷): 이름Reducer 규칙으로 작성
    example: exampleReducer,
    mainNav: mainNavReducer,
    SearchMapBtn: SearchMapBtnReducer
  },
  middleware: [thunk]
})