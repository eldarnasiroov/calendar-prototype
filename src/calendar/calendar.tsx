import "./calendar.scss";
import { Dropdown } from "./blocks/dropdown";

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
      <div className="calendar-header">
        <Dropdown title="Бригада" value="БР/СТО Апельсин" />
        <Dropdown title="Период" value="День" />
        <Dropdown title="Должность" value="Все" />
        <Dropdown title="Вид" value="По сотруд" />
      </div>
    </div>
  );
};
