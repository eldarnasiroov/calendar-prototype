import { useState } from "react";
import "./calendar.scss";
import { mockData } from "./common/data";
import { Body } from "./partials/body";
import { Header } from "./partials/header";
import { ITreeNode } from "../tree/common/types";

interface SelectedNode {
  node: ITreeNode;
  depth: number;
}

export const Calendar = () => {
  const [selectedEntities, setSelectedEntities] = useState(null);

  const handleNodeClick = (node: ITreeNode) => {
    setSelectedEntities(node);
  };

  return (
    <div
      className="calendar-wrapper"
      style={{
        width: "100%",
        padding: "5px",
        background: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header
        treeProps={{
          nodes: mockData,
          // onSelect: setSelectedEntities,
          // selectedNodes: selectedEntities,
          onClick: handleNodeClick,
        }}
      />
      <Body data={selectedEntities} onProfileClick={handleNodeClick} />
    </div>
  );
};
