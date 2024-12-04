import { useState } from "react";
import { Tree } from "../../tree";
import { ITreeNode } from "../../tree/common/types";
import { Dropdown } from "./blocks/dropdown";

interface Props {
  treeProps: {
    nodes: ITreeNode[];
    onSelect?: any;
    selectedNodes?: any[];
    onClick?: (node: ITreeNode) => void;
  };
}

export const Header: React.FC<Props> = ({ treeProps }) => {
  const [treeDropdownOpen, setTreeDropdownOpen] = useState(false);

  return (
    <div className="calendar-header">
      <Dropdown
        title="Бригада"
        value="БР/СТО Апельсин"
        children={
          <Tree
            size="small"
            selectable={false}
            {...treeProps}
            onClick={(node: ITreeNode) => {
              setTreeDropdownOpen(false);
              treeProps?.onClick && treeProps.onClick(node);
            }}
          />
        }
        open={treeDropdownOpen}
        setOpen={setTreeDropdownOpen}
      />
      <Dropdown title="Должность" value="Все" />
      <Dropdown title="Вид" value="По сотруд" />
    </div>
  );
};
