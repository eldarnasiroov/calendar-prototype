import { useState } from "react";
import "./calendar.scss";
import { mockData } from "./common/data";
import { Body } from "./partials/body";
import { Header } from "./partials/header";
import { ITreeNode } from "../tree/common/types";

export const Calendar = () => {
  const [selectedEntities, setSelectedEntities] = useState(null);

  const handleNodeClick = (node: ITreeNode) => {
    setSelectedEntities(node);
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
