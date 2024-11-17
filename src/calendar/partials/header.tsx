import { Tree } from "../../tree";
import { initialBrigadeList } from "../common/data";
import { Dropdown } from "./blocks/dropdown";

export const Header = () => {
  return (
    <div className="calendar-header">
      <Dropdown
        title="Бригада"
        value="БР/СТО Апельсин"
        children={<Tree nodes={initialBrigadeList} />}
      />
      <Dropdown title="Должность" value="Все" />
      <Dropdown title="Вид" value="По сотруд" />
    </div>
  );
};
