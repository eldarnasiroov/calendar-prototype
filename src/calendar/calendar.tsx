import "./calendar.scss";
import { Header } from "./partials/header";

export const Calendar = () => {
  return (
    <div
      className="calendar-wrapper"
      style={{
        width: "100%",
        // margin: "5px",
        padding: "5px",
        background: "white",
      }}
    >
      <Header />
    </div>
  );
};
