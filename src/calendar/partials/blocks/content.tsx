import { ITreeNode } from "../../../tree/common/types";
import { find, sumBy, meanBy } from "lodash";
import "./content.scss";
import {
  getAllOrders,
  getCountOfWorkplaces,
} from "../../../tree/common/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";

export const Content = ({ index, data, onClick = (a) => {} }) => {
  const colors = ["#1745E1", "#FD3132", "#3EAC4D"];

  const isBrigade = data?.type === "brigade";
  const brigadier = find(
    data?.children,
    (item: ITreeNode) => item?.worker?.isBrigadier
  );

  const orders = useMemo(() => getAllOrders(data), [data]);
  const commonInformation = useMemo(() => {
    return {
      quantity: orders?.length,
      totalSum: sumBy(orders, "total_sum")?.toLocaleString("ru-RU"),
      averagePercentOfWork: parseFloat(
        meanBy(orders, "percent_of_work").toFixed(2)
      ),
    };
  }, [orders]);

  return (
    <div
      className="calendar-content-column_wrapper"
      style={{
        borderRight: `4px solid ${colors[index % colors.length]}`,
      }}
    >
      <div>
        <div className="column-avatar_wrapper" onClick={() => onClick(data)}>
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

        <div className="calendar-brigade_rating">
          <span>4.6</span>
          <FontAwesomeIcon
            icon={faStar}
            color="#FFB20A"
            style={{ marginTop: "3px" }}
          />
        </div>

        {isBrigade && (
          <div className="calendar-brigade_info">
            <p>Сотрудн.</p>
            <p className="color-violet fw-bold">{getCountOfWorkplaces(data)}</p>
            <p>Загруж-сть</p>
            <p className="fw-bold">{data.workload}%</p>
            <p>Тек. заказы</p>
            <p>
              <span className="color-violet fw-bold">
                {commonInformation.quantity}
              </span>{" "}
              на
            </p>
            <p className=" fw-bold">{commonInformation.totalSum}₽</p>
            <p className="fw-bold color-white">
              {commonInformation.averagePercentOfWork}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
