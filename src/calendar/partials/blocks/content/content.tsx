import { ITreeNode, TOrder } from "../../../components/tree/common/types";
import { find, sumBy, meanBy, map } from "lodash";
import "./content.scss";
import { getAllOrders, getCountOfWorkplaces } from "../../../common/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";
import { orderColors, statuses } from "../../../common/constants";
import { useDispatch } from "react-redux";
import { setSelectedEntities } from "../../../common/redux/calendarSlice";

export const Content = ({ index, data }) => {
  const dispatch = useDispatch();

  const borderColors = ["#1745E1", "#FD3132", "#3EAC4D"];

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
        borderRight: `4px solid ${borderColors[index % borderColors.length]}`,
      }}
    >
      <div>
        <div
          className="column-avatar_wrapper"
          onClick={() => dispatch(setSelectedEntities(data))}
        >
          <div
            className="column-avatar"
            style={{
              borderColor: borderColors[index % borderColors.length],
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
            <p style={{ fontSize: "8px", color: "grey" }}>Загружено:</p>
            <p>
              <span className="fw-bold color-violet">7</span> на{" "}
              <span className="fw-bold color-white">{data.workload}%</span>
            </p>
            <p style={{ fontSize: "8px", color: "grey" }}>Заказы:</p>
            <p>
              <span className="fw-bold color-violet">
                {commonInformation.quantity}
              </span>{" "}
              на{" "}
              <span className="fw-bold color-green">
                {commonInformation.totalSum}₽
              </span>
            </p>
            {/* <p>Сотрудн.</p>
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
            </p> */}
          </div>
        )}
        {map(orders, (item: TOrder) => (
          <div
            className="calendar-order"
            key={item.id}
            style={{
              background: orderColors[item.order_status],
            }}
          >
            <div className="calendar-order_id">{item.id}</div>
            <div className="calendar-order_info">
              <p>Владислав М.</p>
              <p>Мазда</p>
              <p>Замена масла</p>
              <p>Масло</p>
              <p>{statuses[item.order_status]}</p>
            </div>
            <div className="calendar-order_percent">
              {item.percent_of_work}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
