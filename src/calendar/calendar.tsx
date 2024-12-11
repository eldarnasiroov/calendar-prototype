import { useEffect } from "react";
import "./calendar.scss";
import { Body } from "./partials/body";
import { Header } from "./partials/header";
import { useDispatch } from "react-redux";
import { setSelectedEntities } from "./common/redux/calendarSlice";
import { personalMockData } from "./common/data";

export const Calendar = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setSelectedEntities(personalMockData));
  }, []);

  return (
    <div className="calendar-wrapper">
      <Header />
      <Body />
    </div>
  );
};
