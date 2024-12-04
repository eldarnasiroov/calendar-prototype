import { ITreeNode } from "../../../tree/common/types";
import { find } from "lodash";
import "./content.scss";
import { getCountOfWorkplaces } from "../../../tree/common/helpers";

export const Content = ({ index, data, onClick = (a) => {} }) => {
  const colors = ["#1745E1", "#FD3132", "#3EAC4D"];
  const isBrigade = data?.type === "brigade";
  const brigadier = find(
    data?.children,
    (item: ITreeNode) => item?.worker?.isBrigadier
  );

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
              src={isBrigade ? brigadier?.worker?.image : data?.worker?.image}
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
            background: data.type === "brigade" ? "#E66F1B" : "#FFB20A",
          }}
        >
          {data.name}
        </div>

        {isBrigade && (
        <div
          style={{
            marginTop: "5px",
            background: "#FCCC9E",
            width: "100%",
            padding: "5px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "10px",
            textAlign: "center",
            lineHeight: "14px",
            gap: "5px",
          }}
        >
          <p style={{ margin: "0" }}>Сотрудн.</p>
          <p style={{ margin: "0", fontWeight: "bold", color: "violet" }}>
            {getCountOfWorkplaces(data)}
          </p>
          <p style={{ margin: "0" }}>Загруж-сть</p>
          <p style={{ margin: "0", fontWeight: "bold" }}>{data.workload}%</p>
          <p style={{ margin: "0" }}>Тек. заказы</p>
          <p style={{ margin: "0" }}>
            <span style={{ fontWeight: "bold", color: "violet" }}>{0}</span> на
          </p>
          <p style={{ margin: "0", fontWeight: "bold" }}>{0}₽</p>
          <p style={{ margin: "0", fontWeight: "bold", color: "white" }}>
            {0}%
          </p>
        </div>
      )}
      </div>
    </div>
  );
};
