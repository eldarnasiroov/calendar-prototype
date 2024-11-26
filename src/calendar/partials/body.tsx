import { ITreeNode } from "../../tree/common/types";
import { Content } from "./blocks/content";
import { map } from "lodash";

interface SelectedNode {
  node: ITreeNode;
  depth: number;
}

interface Props {
  data: SelectedNode[];
}

export const Body: React.FC<Props> = ({ data }) => {
  const temp = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div
      style={{
        marginTop: "10px",
        fontSize: "12px",
        width: "100%",
        display: "flex",
        // justifyContent: "",
        alignItems: "center",
        gap: "5px",
        overflowX: "scroll",
      }}
    >
      {map(data, (item, index) => (
        <Content key={item} index={index} data={item} />
      ))}
    </div>
  );
};
