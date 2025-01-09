import { ITreeNode } from "../components/tree/common/types";
import { Content } from "./blocks/content/content";
import { map, find } from "lodash";
import "../calendar.scss";
import { LeftColumn } from "./blocks/leftColumn/leftColumn";
import { getSelectedEntities } from "../common/redux/selectors";
import { useSelector } from "react-redux";
import "./blocks/content/content.scss";
import { Timeline } from "./blocks/timeline/timeline";
import { useEffect, useRef, useState } from "react";
import { borderColors } from "../common/constants";

export const Body: React.FC = () => {
  const selectedEntities: ITreeNode = useSelector(getSelectedEntities);
  const [wrapperHeight, setWrapperHeight] = useState(0);

  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [isStickyHeaderVisible, setIsStickyHeaderVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container.scrollLeft > 50) {
        setScrollLeft(true);
      } else if (container.scrollLeft === 0) {
        setScrollLeft(false);
      }
    };

    const checkVisibility = () => {
      const element = document.getElementById("column-avatar_wrapper");
      if (!element) return;
      const rect = element?.getBoundingClientRect();
      const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      setIsStickyHeaderVisible(!inView);
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
      container.addEventListener("scroll", checkVisibility);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
        container.removeEventListener("scroll", checkVisibility);
      }
    };
  }, []);

  // const isBrigade = data?.type === "brigade";

  const getBrigadier = (data) => {
    return find(data?.children, (item: ITreeNode) => item?.worker?.isBrigadier);
  };

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
      <LeftColumn data={selectedEntities} />
      <div
        ref={containerRef}
        style={{
          position: "relative",
          display: "flex",
          overflowX: "scroll",
        }}
      >
        <Timeline setWrapperHeight={setWrapperHeight} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: wrapperHeight + "px",
          }}
        >
          <div
            style={{
              position: "sticky",
              top: "0px",
              zIndex: 1,
              display: "flex",
              alignItems: "flex-start",
              gap: "5px",
              height: 0,
              opacity: isStickyHeaderVisible ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          >
            {map(selectedEntities?.children, (item, index) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  minWidth: "60px",
                  maxWidth: "80px",
                }}
              >
                <div
                  key={item.id}
                  style={{
                    borderRight: "4px solid transparent",
                  }}
                >
                  <div
                    className="header-avatar_wrapper"
                    onClick={() => {
                      //  dispatch(setSelectedEntities(data));
                      //  dispatch(setSelectedOrderId(null));
                    }}
                  >
                    <div
                      className="column-avatar"
                      style={{
                        borderColor: borderColors[index % borderColors.length],
                      }}
                    >
                      <img
                        //  ref={imageRef}
                        src={
                          item.type === "brigade"
                            ? getBrigadier(item)?.worker?.image
                            : item?.worker?.image
                        }
                        alt=""
                        className="column-avatar_image"
                        width={"68px"}
                        height={"68px"}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="header-orders_title"
                  style={{
                    background: item.type === "brigade" ? "#E66F1B" : "#FFB20A",
                  }}
                >
                  {item.name}
                </div>
              </div>
            ))}
          </div>
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
      </div>
    </div>
  );
};
