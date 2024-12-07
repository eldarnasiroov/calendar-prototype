import "./calendar.scss";
import { Body } from "./partials/body";
import { Header } from "./partials/header";

export const Calendar = () => {
  return (
    <div className="calendar-wrapper">
      <Header />
      <Body />
    </div>
  );
};
