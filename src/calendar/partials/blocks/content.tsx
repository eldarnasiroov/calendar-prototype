import { useState } from "react";
import "./content.scss";

export const Content = ({ index, data, onClick = (a) => {} }) => {
  const colors = ["#1745E1", "#FD3132", "#3EAC4D"];

  return (
    <div
      className="calendar-content-column_wrapper"
      style={{
        borderRight: `4px solid ${colors[index % colors.length]}`,
      }}
      onClick={() => onClick(data)}
    >
      <div>
        <div className="column-avatar_wrapper">
          <div
            className="column-avatar"
            style={{
              borderColor: colors[index % colors.length],
            }}
          >
            <img
              src="no_image_worker.svg"
              alt=""
              className="column-avatar_image"
            />
          </div>
        </div>
      </div>

      {/* Контейнер для задач */}
      <div className="calendar-orders_wrapper">
        <div
          className="calendar-orders_title"
          style={{
            background: data.node.type === "brigade" ? "#E66F1B" : "#FFB20A",
          }}
        >
          {data.node.name}
        </div>

        <div
          style={{
            width: "100%",
            height: "70px",
            background: "red",
            borderRadius: "10px",
            padding: "5px",
            marginTop: "10px",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "50px",
            background: "orange",
            borderRadius: "10px",
            padding: "5px",
            marginTop: "10px",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "60px",
            background: "green",
            borderRadius: "10px",
            padding: "5px",
            marginTop: "10px",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "80px",
            background: "blue",
            borderRadius: "10px",
            padding: "5px",
            marginTop: "10px",
          }}
        ></div>
      </div>
    </div>
  );
};
