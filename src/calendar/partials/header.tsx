import { useState } from "react";
import { Tree } from "../components/tree";
import { ITreeNode } from "../components/tree/common/types";
import { Dropdown } from "./blocks/dropdown/dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { mockData } from "../common/data";
import { setSelectedEntities } from "../common/redux/calendarSlice";

interface Props {
  treeProps: {
    nodes: ITreeNode[];
    onSelect?: any;
    selectedNodes?: any[];
    onClick?: (node: ITreeNode) => void;
  };
}

export const Header: React.FC = () => {
  const dispatch = useDispatch();

  const [treeDropdownOpen, setTreeDropdownOpen] = useState(false);

  return (
    <div className="calendar-header">
      <Dropdown
        title="Бригада"
        value="БР/СТО Апельсин"
        open={treeDropdownOpen}
        setOpen={setTreeDropdownOpen}
        leftButton={
          <div style={{ backgroundColor: "red", padding: "5px" }}>
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </div>
        }
        children={
          <Tree
            size="small"
            selectable={false}
            nodes={mockData}
            onClick={(node: ITreeNode) => {
              setTreeDropdownOpen(false);
              dispatch(setSelectedEntities(node));
            }}
          />
        }
      />
      <Dropdown title="Должность" value="Все" />
      <Dropdown title="Вид" value="По сотруд" />
    </div>
  );
};
