import { ITreeNode } from "../components/tree/common/types";
import { Content } from "./blocks/content/content";
import { map } from "lodash";
import "../calendar.scss";
import { LeftColumn } from "./blocks/leftColumn/leftColumn";
import { getSelectedEntities } from "../common/redux/selectors";
import { useSelector } from "react-redux";
import "./blocks/content/content.scss";
import { Timeline } from "./blocks/timeline/timeline";
import { useState } from "react";

export const Body: React.FC = () => {
  const selectedEntities: ITreeNode = useSelector(getSelectedEntities);

  const [wrapperHeight, setWrapperHeight] = useState(0); // Состояние для высоты

  return (
    <div className="calendar-body">
      <LeftColumn data={selectedEntities} />
      <Timeline setWrapperHeight={setWrapperHeight} />
      <div className="calendar-body__wrapper">
        {map(selectedEntities?.children, (item, index) => (
          <Content
            key={item}
            index={index}
            data={item}
            columnHeight={wrapperHeight}
          />
        ))}
      </div>
    </div>
  );
};
