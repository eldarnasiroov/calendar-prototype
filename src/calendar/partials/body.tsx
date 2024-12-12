import { ITreeNode } from "../components/tree/common/types";
import { Content } from "./blocks/content/content";
import { map } from "lodash";
import "../calendar.scss";
import { LeftColumn } from "./blocks/leftColumn/leftColumn";
import { getSelectedEntities } from "../common/redux/selectors";
import { useSelector } from "react-redux";
import "./blocks/content/content.scss";
import { Timeline } from "./blocks/timeline/timeline";
// import { Timeline } from "antd";

export const Body: React.FC = () => {
  const selectedEntities: ITreeNode = useSelector(getSelectedEntities);

  return (
    <div className="calendar-body">
      <LeftColumn data={selectedEntities} />
      <div className="calendar-body__wrapper">
      <Timeline />
        {map(selectedEntities?.children, (item, index) => (
          <Content key={item} index={index} data={item} />
        ))}
      </div>
    </div>
  );
};
