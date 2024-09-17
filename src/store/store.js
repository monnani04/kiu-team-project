import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";

import exampleReducer from "./modules/exampleSlice";
import mainNavReducer from "./modules/mainNavSlice";
import SearchMapBtnReducer from "./modules/SearchMapBtnSlice";
import latlngReducer from "./modules/latlngSlice";
import myinfoReducer from "./modules/myinfoSlice";
import authUIReducer from "./modules/authUIStateSlice";
import ReviewUIReducer from "./modules/ReviewUIStateSlice";
import FacilitiesUIReducer from "./modules/FacilitiesUIStateSlice";
import RulesUIReducer from "./modules/RulesUIStateSlice";

export const store = configureStore({
  reducer: {
    //이름(변수와 비슷): 이름Reducer 규칙으로 작성
    example: exampleReducer,
    mainNav: mainNavReducer,
    SearchMapBtn: SearchMapBtnReducer,
    latlng:latlngReducer,
    myinfo:myinfoReducer,
    authUI:authUIReducer,
    ReviewUI:ReviewUIReducer,
    FacilitiesUI:FacilitiesUIReducer,
    RulesUI:RulesUIReducer
  },
  middleware: [thunk]
})