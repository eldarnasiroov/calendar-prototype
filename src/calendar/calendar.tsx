import "./calendar.scss";
import { Body } from "./partials/body";
import { Header } from "./partials/header";

export const Calendar = () => {
  return (
    <div
      className="calendar-wrapper"
      style={{
        width: "100%",
        padding: "5px",
        background: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <Body />
    </div>
  );
};
