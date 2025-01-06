import { ITreeNode } from "../components/tree/common/types";
import { Content } from "./blocks/content/content";
import { map } from "lodash";
import "../calendar.scss";
import { LeftColumn } from "./blocks/leftColumn/leftColumn";
import { getSelectedEntities } from "../common/redux/selectors";
import { useSelector } from "react-redux";
import "./blocks/content/content.scss";
import { Timeline } from "./blocks/timeline/timeline";
import { useEffect, useRef, useState } from "react";

export const Body: React.FC = () => {
  const selectedEntities: ITreeNode = useSelector(getSelectedEntities);
  const [wrapperHeight, setWrapperHeight] = useState(0);

  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container.scrollLeft > 50) {
        setScrollLeft(true);
      } else if (container.scrollLeft === 0) {
        setScrollLeft(false);
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      className="calendar-body"
      style={{
        position: "relative",
        left: scrollLeft ? "-50px" : 0,
        width: scrollLeft ? "calc(100% + 50px)" : "",
        transition: "left 0.3s ease",
      }}
    >
      <LeftColumn data={selectedEntities}  />
      <Timeline setWrapperHeight={setWrapperHeight} />
      <div ref={containerRef} className="calendar-body__wrapper">
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
