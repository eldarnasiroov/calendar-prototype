import React from "react";
import moment from "moment";

const DAY_HEIGHT = 100;

const events = [
  { start: "2024-12-01T12:00:00", end: "2024-12-02T18:00:00" },
  { start: "2024-12-03T00:00:00", end: "2024-12-04T12:00:00" },
  { start: "2024-12-05T06:00:00", end: "2024-12-06T06:00:00" },
];

export const TimeGrid: React.FC = () => {
  const days = Array.from({ length: 7 }, (_, i) =>
    moment().startOf("day").add(i, "days")
  );

  const calculateBlockStyle = (start: string, end: string) => {
    const startDate = moment(start);
    const endDate = moment(end);

    const startDayIndex = startDate.diff(moment(days[0]), "days", true);
    const endDayIndex = endDate.diff(moment(days[0]), "days", true);

    const top = startDayIndex * DAY_HEIGHT;
    const height = (endDayIndex - startDayIndex) * DAY_HEIGHT;

    return { top, height };
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Временная сетка */}
      <div style={{ borderRight: "1px solid #ccc", width: "50px" }}>
        {days.map((day, i) => (
          <div
            key={i}
            style={{
              height: `${DAY_HEIGHT}px`,
              borderBottom: "1px solid #ccc",
              textAlign: "center",
              lineHeight: `${DAY_HEIGHT}px`,
            }}
          >
            {day.format("D MMM")}
          </div>
        ))}
      </div>

      {/* Столбец с блоками */}
      <div style={{ position: "relative", width: "200px" }}>
        {events.map((event, index) => {
          const style = calculateBlockStyle(event.start, event.end);
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                left: "0",
                width: "100%",
                top: `${style.top}px`,
                height: `${style.height}px`,
                backgroundColor: "blue",
                color: "white",
                textAlign: "center",
                lineHeight: `${style.height}px`,
                borderRadius: "4px",
              }}
            >
              Event {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

