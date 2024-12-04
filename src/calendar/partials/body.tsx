import { useState } from "react";
import { ITreeNode } from "../../tree/common/types";
import { Content } from "./blocks/content";
import { map } from "lodash";
import "./blocks/content.scss";
import "../calendar.scss";
import { LeftColumn } from "./blocks/leftColumn";

interface SelectedNode {
  node: ITreeNode;
  depth: number;
}

interface Props {
  data: ITreeNode;
  onProfileClick?: (node: ITreeNode) => void;
}

export const Body: React.FC<Props> = ({ data, onProfileClick }) => {
  const handleClick = (item: ITreeNode) => {
    onProfileClick(item);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        gap: "5px",
        justifyContent: "space-between",
      }}
    >
      <LeftColumn data={data} />
      <div className="calendar-body__wrapper">
        {map(data?.children, (item, index) => (
          <Content key={item} index={index} data={item} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};
