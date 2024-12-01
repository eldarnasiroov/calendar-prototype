import { useState } from "react";
import { ITreeNode } from "../../tree/common/types";
import { Content } from "./blocks/content";
import { map, isEmpty } from "lodash";

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
  console.log("🚀 ~ handleClick ~ item:", item)

  };
  // const
  return (
    <div
      style={{
        marginTop: "10px",
        fontSize: "12px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "5px",
        overflowX: "scroll",
        position: "relative", 
      }}
    >
      {map(data, (item, index) => (
        <Content key={item} index={index} data={item} onClick={handleClick} />
      ))}
    </div>
  );
};
