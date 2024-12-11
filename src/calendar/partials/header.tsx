import { useState } from "react";
import { Tree } from "../components/tree";
import { ITreeNode } from "../components/tree/common/types";
import { Dropdown } from "./blocks/dropdown/dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { mockData, personalMockData } from "../common/data";
import { setSelectedEntities } from "../common/redux/calendarSlice";
import { getSelectedEntities } from "../common/redux/selectors";
import { findObjectWithMatchingParentId } from "../common/helpers";
import { FAKE_CURRENT_USER_ID } from "../common/constants";

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

  const [treeDropdownOpen, setTreeDropdownOpen] = useState(false);

  const handleBack = () => {
    if (
      !selectedEntities?.parentId &&
      selectedEntities?.id === FAKE_CURRENT_USER_ID
    ) {
      return;
    }
    console.log("zawel");
    const parentEntity = findObjectWithMatchingParentId(
      // !To Do
      mockData[0],
      selectedEntities.parentId
    );
    if (parentEntity) {
      dispatch(setSelectedEntities(parentEntity));
      return;
    }
    dispatch(setSelectedEntities(personalMockData));
  };

  return (
    <div className="calendar-header">
      <Dropdown
        title="Бригада"
        value="БР/СТО Апельсин"
        open={treeDropdownOpen}
        setOpen={setTreeDropdownOpen}
        leftButton={
          <div style={{ padding: "5px" }} onClick={handleBack}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="2x"
              color={
                !!selectedEntities?.parentId ||
                selectedEntities?.id !== FAKE_CURRENT_USER_ID
                  ? "black"
                  : "grey"
              }
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
