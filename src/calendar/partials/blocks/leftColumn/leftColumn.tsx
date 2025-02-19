import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ITreeNode, TOrder } from "../../../components/tree/common/types";
import "./leftColumn.scss";
import { find, sumBy, meanBy, map } from "lodash";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  findElementByTypeAndId,
  getAllOrders,
  getCountOfWorkplaces,
} from "../../../common/helpers";
import { useEffect, useMemo, useState } from "react";
import {
  FAKE_CURRENT_USER_ID,
  orderColors,
  statuses,
} from "../../../common/constants";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedOrderId } from "../../../common/redux/selectors";
import {
  setSelectedEntities,
  setSelectedOrderId,
} from "../../../common/redux/calendarSlice";
import { mockData } from "../../../common/data";

interface Props {
  data: ITreeNode;
}

export const LeftColumn: React.FC<Props> = ({ data }) => {
  if (!data) return null;

  const selectedOrderId = useSelector(getSelectedOrderId);
  const dispatch = useDispatch();

  const isOrderSelected = !!selectedOrderId;
  const [selectedOrder, setSelectedOrder] = useState<TOrder | null>(null);

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

  useEffect(() => {
    if (!selectedOrderId) return;

    const order = find(orders, (item: TOrder) => item.id === selectedOrderId);
    setSelectedOrder(order);
  }, [selectedOrderId]);

  return (
    <div className="calendar-left-column">
      <div>
        <div className="column-avatar_wrapper">
          <div
            className="column-avatar"
            onClick={() => {
              if (data.id === FAKE_CURRENT_USER_ID) {
                dispatch(setSelectedOrderId(null));
                return;
              }

              const result = findElementByTypeAndId(
                mockData,
                data.type,
                data.id
              );

              dispatch(setSelectedOrderId(null));
              dispatch(setSelectedEntities(result));
            }}
            style={{
              borderColor: "black",
              cursor: "pointer",
            }}
          >
            <img
              src={
                isBrigade
                  ? brigadier?.worker?.image
                    ? brigadier?.worker?.image
                    : "no_image_worker.svg"
                  : data?.worker?.image
              }
              alt=""
              className="column-avatar_image"
            />
          </div>
        </div>
      </div>
      <div className="calendar-left-column__wrapper">
        <div
          className="calendar-orders_title"
          style={{
            background: data.type === "brigade" ? "#E66F1B" : "#FFB20A",
          }}
        >
          {data.name}
        </div>
        <div style={{ display: "flex", gap: "3px" }}>
          <span>4.6</span>
          <FontAwesomeIcon
            icon={faStar}
            color="#FFB20A"
            style={{ marginTop: "3.4px" }}
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
                {commonInformation.quantity || 0}
              </span>{" "}
              на
            </p>
            <p className=" fw-bold">{commonInformation.totalSum}₽</p>
            <p className="fw-bold color-white">
              {commonInformation.averagePercentOfWork}%
            </p>
          </div>
        )}

        {!isOrderSelected &&
          map(orders, (item: TOrder) => (
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

        {isOrderSelected && !!selectedOrder && (
          <div
            className="calendar-order"
            key={selectedOrder.id}
            style={{
              background: orderColors[selectedOrder.order_status],
            }}
          >
            <div className="calendar-order_id">{selectedOrder.id}</div>
            <div className="calendar-order_info">
              <p>Владислав М.</p>
              <p>Мазда</p>
              <p>Замена масла</p>
              <p>Масло</p>
              <p>{statuses[selectedOrder.order_status]}</p>
            </div>
            <div className="calendar-order_percent">
              {selectedOrder.percent_of_work}%
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
