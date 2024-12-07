import { ITreeNode, TOrder } from "../../../components/tree/common/types";
import { find, sumBy, meanBy, map } from "lodash";
import "./content.scss";
import {
  getAllOrders,
  getCountOfWorkplaces,
} from "../../../common/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";
import { orderColors } from "../../../common/constants";
import { useDispatch } from "react-redux";
import { setSelectedEntities } from "../../../common/redux/calendarSlice";

export const Content = ({ index, data, }) => {
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
        {map(orders, (item: TOrder) => (
          <div
            key={item.id}
            style={{
              width: "100%",
              background: orderColors[item.order_status],
              padding: "5px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                background: "#FFB20A",
                padding: "0px 3px",
                marginBottom: "20px",
              }}
            >
              {item.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
