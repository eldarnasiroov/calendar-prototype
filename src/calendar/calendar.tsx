import { useState } from "react";
import "./calendar.scss";
import { mockData } from "./common/data";
import { Body } from "./partials/body";
import { Header } from "./partials/header";
import { ITreeNode } from "../tree/common/types";
import { some, forEach } from "lodash";

interface SelectedNode {
  node: ITreeNode;
  depth: number;
}

export const Calendar = () => {
  const [selectedEntities, setSelectedEntities] = useState<SelectedNode[]>([]);
  console.log("🚀 ~ Calendar ~ selectedEntities:", selectedEntities)

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
          onSelect: setSelectedEntities,
          selectedNodes: selectedEntities,
        }}
      />
      <Body data={selectedEntities} />
    </div>
  );
};
