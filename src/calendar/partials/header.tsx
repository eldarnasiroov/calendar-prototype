import { Tree } from "../../tree";
import { ITreeNode } from "../../tree/common/types";
import { Dropdown } from "./blocks/dropdown";

interface Props {
  treeProps: {
    nodes: ITreeNode[];
    onSelect?: any;
    selectedNodes?: any[];
  };
}

export const Header: React.FC<Props> = ({ treeProps }) => {
  return (
    <div className="calendar-header">
      <Dropdown
        title="Бригада"
        value="БР/СТО Апельсин"
        children={<Tree size="small" selectable={true} {...treeProps} />}
      />
      <Dropdown title="Должность" value="Все" />
      <Dropdown title="Вид" value="По сотруд" />
    </div>
  );
};
