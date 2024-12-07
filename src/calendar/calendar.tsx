import { useState } from "react";
import "./calendar.scss";
import { mockData } from "./common/data";
import { Body } from "./partials/body";
import { Header } from "./partials/header";
import { ITreeNode } from "./components/tree/common/types";
import { useDispatch, useSelector } from "react-redux";
import { getCalendar, getSelectedEntities } from "./common/redux/selectors";
import { setSelectedEntities } from "./common/redux/calendarSlice";

export const Calendar = () => {
  const selectedEntities = useSelector(getSelectedEntities);
  console.log("🚀 ~ Calendar ~ selectedEntities:", selectedEntities)
  const dispatch = useDispatch();
  // console.log("🚀 ~ Calendar ~ calendar:", calendar)
  // const [selectedEntities, setSelectedEntities] = useState(null);

  const handleNodeClick = (node: ITreeNode) => {
    // setSelectedEntities(node);
    dispatch(setSelectedEntities(node));
  };

  return (
    <div className="calendar-wrapper">
      <Header
        treeProps={{
          nodes: mockData,
          onClick: handleNodeClick,
        }}
      />
      <Body data={selectedEntities} onProfileClick={handleNodeClick} />
    </div>
  );
};
