import { ITreeNode } from "../components/tree/common/types";
import { Content } from "./blocks/content/content";
import { map } from "lodash";
import "../calendar.scss";
import { LeftColumn } from "./blocks/leftColumn/leftColumn";

interface Props {
  data: ITreeNode;
  onProfileClick?: (node: ITreeNode) => void;
}

export const Body: React.FC<Props> = ({ data, onProfileClick }) => {
  const handleClick = (item: ITreeNode) => {
    onProfileClick(item);
  };

  return (
    <div className="calendar-body">
      <LeftColumn data={data} />
      <div className="calendar-body__wrapper">
        {map(data?.children, (item, index) => (
          <Content key={item} index={index} data={item} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};
