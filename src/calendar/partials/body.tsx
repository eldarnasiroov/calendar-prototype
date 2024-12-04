import { useState } from "react";
import { ITreeNode } from "../../tree/common/types";
import { Content } from "./blocks/content";
import { map, isEmpty } from "lodash";
import "../calendar.scss";

interface SelectedNode {
  node: ITreeNode;
  depth: number;
}

interface Props {
  data: SelectedNode[];
}

export const Body: React.FC<Props> = ({ data }) => {
  const [temp, setTemp] = useState(data);

  const handleClick = (item: ITreeNode) => {
    console.log("🚀 ~ handleClick ~ item:", item);
  };

  return (
    <div className="calendar-body__wrapper">
      {map(data, (item, index) => (
        <Content key={item} index={index} data={item} onClick={handleClick} />
      ))}
    </div>
  );
};
