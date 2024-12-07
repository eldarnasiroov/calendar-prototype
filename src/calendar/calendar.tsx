import "./calendar.scss";
import { mockData } from "./common/data";
import { Body } from "./partials/body";
import { Header } from "./partials/header";
import { ITreeNode } from "./components/tree/common/types";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedEntities } from "./common/redux/selectors";
import { setSelectedEntities } from "./common/redux/calendarSlice";

export const Calendar = () => {
  return (
    <div className="calendar-wrapper">
      <Header />
      <Body />
    </div>
  );
};
