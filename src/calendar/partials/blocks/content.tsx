import { useState } from "react";
import "./content.scss";

export const Content = ({ index, data, onClick = (a) => {} }) => {
  const colors = {
    0: "#1745E1",
    1: "#FD3132",
    2: "#3EAC4D",
    3: "#1745E1",
    4: "#FD3132",
    5: "#3EAC4D",
    6: "#1745E1",
  };


  return (
    <div
      className="calendar-content-column_wrapper"
      style={{
        borderRight: `4px solid ${colors[index]}`,
      }}
      onClick={() => onClick(data)}
    >
      <div>
        <div className="column-avatar_wrapper">
          <div
            className="column-avatar"
            style={{
              borderLeft: `4px dotted ${colors[index]}`,
              border: `4px solid ${colors[index]}`,
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
