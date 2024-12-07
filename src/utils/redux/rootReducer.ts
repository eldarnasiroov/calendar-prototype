import { combineReducers } from "@reduxjs/toolkit";
import calendarReducer from "../../calendar/common/redux/calendarSlice";

const rootReducer = combineReducers({
  calendar: calendarReducer,
});

export default rootReducer;
