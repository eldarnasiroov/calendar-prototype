import { map } from "lodash";
import "./timeline.scss";

import { useEffect, useRef } from "react";

export const Timeline = ({ setWrapperHeight }) => {
  const wrapperRef = useRef(null);

  const JANUARY = 0;
  function getDaysOfMonth(year, month) {
    // Месяц начинается с 0
    const daysInMonth = new Date(year, month, 0).getDate();

    const daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i.toString());
    }

    return daysArray;
  }

  useEffect(() => {
    if (wrapperRef.current) {
      setWrapperHeight(wrapperRef.current.offsetHeight + 125);
    }
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="calendar-timeline"
      style={{
        // Вынести в константу
        marginTop: "125px",
      }}
    >
      <div className="calendar-timeline__wrapper">
        {map(getDaysOfMonth(2024, JANUARY), (item) => {
          return (
            <div key={item} className="calendar-timeline__item">
              <div className="calendar-timeline__date">
                <div className="calendar-timeline__day">{item}</div>
              </div>
              <div className="calendar-timeline__line"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
