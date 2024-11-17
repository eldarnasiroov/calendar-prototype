import { Dropdown } from "./blocks/dropdown";

export const Header = () => {
  return (
    <div className="calendar-header">
      <Dropdown title="Бригада" value="БР/СТО Апельсин" />
      <Dropdown title="Период" value="День" />
      <Dropdown title="Должность" value="Все" />
      <Dropdown title="Вид" value="По сотруд" />
    </div>
  );
};
