import { useState } from "react";
import { Tree } from "../components/tree";
import { ITreeNode } from "../components/tree/common/types";
import { Dropdown } from "./blocks/dropdown/dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { mockData } from "../common/data";
import { setSelectedEntities } from "../common/redux/calendarSlice";
import { getSelectedEntities } from "../common/redux/selectors";

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
  const selectedEntities: ITreeNode = useSelector(getSelectedEntities);
  console.log("🚀 ~ selectedEntities:", selectedEntities);

  const [treeDropdownOpen, setTreeDropdownOpen] = useState(false);

  return (
    <div className="calendar-header">
      <Dropdown
        title="Бригада"
        value="БР/СТО Апельсин"
        open={treeDropdownOpen}
        setOpen={setTreeDropdownOpen}
        leftButton={
          <div style={{ padding: "5px" }}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="2x"
              color={selectedEntities?.parentId ? "black" : "grey"}
            />
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
