import { ITreeNode, TOrder } from "../../../components/tree/common/types";
import { find, sumBy, meanBy, map, minBy } from "lodash";
import "./content.scss";
import { getAllOrders } from "../../../common/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useMemo, useRef, useState } from "react";
import { borderColors, orderColors, statuses } from "../../../common/constants";
import { useDispatch } from "react-redux";
import { setSelectedEntities } from "../../../common/redux/calendarSlice";
import moment from "moment";

export const Content = ({ index, data, columnHeight }) => {
  const dispatch = useDispatch();

  const isBrigade = data?.type === "brigade";
  const brigadier = find(
    data?.children,
    (item: ITreeNode) => item?.worker?.isBrigadier
  );

  const orders = useMemo(() => getAllOrders(data), [data]);

  function groupByOverlappingRanges(items) {
    const parsedItems = items.map((item) => ({
      ...item,
      started_at: new Date(item.started_at),
      finished_at: new Date(item.finished_at),
    }));

    const isOverlapping = (range1, range2) => {
      return (
        range1.started_at <= range2.finished_at &&
        range1.finished_at >= range2.started_at
      );
    };

    const groups = [];

    parsedItems.forEach((item) => {
      let addedToGroup = false;

      for (const group of groups) {
        if (group.some((existingItem) => isOverlapping(existingItem, item))) {
          group.push(item);
          addedToGroup = true;
          break;
        }
      }

      if (!addedToGroup) {
        groups.push([item]);
      }
    });

    return groups.map((group) =>
      group.map((item) => ({
        ...item,
        started_at: item.started_at.toISOString(),
        finished_at: item.finished_at.toISOString(),
      }))
    );
  }

  const groupedOrders = groupByOverlappingRanges(orders);

  function getMinStartedAtDay(items) {
    const minDate = minBy(items, (item) => new Date(item.started_at));
    return new Date(minDate.started_at).getUTCDate();
  }

  function calculateFactors(items) {
    // Преобразуем строки дат в объекты Date
    const parsedItems = items.map((item) => ({
      ...item,
      started_at: new Date(item.started_at),
    }));

    // Находим элемент с минимальным started_at
    const minItem = minBy(parsedItems, (item) => item.started_at);

    // Минимальное значение started_at
    const minStartedAt = minItem.started_at;

    // Формируем результат с id и factor
    return parsedItems.map((item) => ({
      id: item.id,
      factor: Math.round(
        (item.started_at - minStartedAt) / (1000 * 60 * 60 * 24)
      ), // Разница в днях
    }));
  }

  const IMAGE_MAX_HEIGHT = 68;
  const imageRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);
  const [marginBottom, setMarginBottom] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (imageRef.current) {
        setImageHeight(imageRef.current.offsetHeight);
      }
    });

    if (imageRef.current) {
      resizeObserver.observe(imageRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    setMarginBottom(IMAGE_MAX_HEIGHT - imageHeight);
  }, [imageHeight]);

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
        position: "relative",
        height: columnHeight + "px",
      }}
    >
      <div style={{}}>
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
              ref={imageRef}
              src={isBrigade ? brigadier?.worker?.image : data?.worker?.image}
              alt=""
              className="column-avatar_image"
              width={"68px"}
              height={"68px"}
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

        <div
          className="calendar-brigade_rating"
          style={{ marginBottom: marginBottom + "px" }}
        >
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
          </div>
        )}
        {isBrigade &&
          map(orders, (item: TOrder) => {
            return (
              <div
                className="calendar-order"
                key={item.id}
                style={{
                  background: orderColors[item.order_status],
                  overflow: "hidden",
                  height: !isBrigade
                    ? moment(item.finished_at).diff(
                        item.started_at,
                        "days",
                        true
                      ) *
                        100 +
                      "px"
                    : "",
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
            );
          })}
        {!isBrigade && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              // overflowY: 'scroll',
              width: "100%",
              // background: "red",
            }}
          >
            {map(groupedOrders, (item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    position: "absolute",
                    top: (getMinStartedAtDay(item) - 1) * 100 + "px",
                    width: "100%",
                    overflow: "scroll",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      position: "relative",
                      overflow: "scroll",
                      width: "100%",
                      gap: "2px",
                    }}
                  >
                    {map(item, (order: TOrder) => {
                      return (
                        <div
                          className="calendar-order"
                          key={order.id}
                          style={{
                            background: orderColors[order.order_status],
                            overflow: "hidden",
                            // minWidth: "40px",
                            marginTop:
                              find(
                                calculateFactors(item),
                                (factor) => factor.id === order.id
                              )?.factor *
                                100 +
                              // 10 +
                              "px",
                            height: !isBrigade
                              ? moment(order.finished_at).diff(
                                  order.started_at,
                                  "days",
                                  true
                                ) *
                                  100 +
                                "px"
                              : "",
                          }}
                        >
                          <div className="calendar-order_id">{order.id}</div>
                          {item.length < 2 && (
                            <>
                              <div className="calendar-order_info">
                                <p>Владислав М.</p>
                                <p>Мазда</p>
                                <p>Замена масла</p>
                                <p>Масло</p>
                                <p>{statuses[order.order_status]}</p>
                              </div>
                              <div className="calendar-order_percent">
                                {order.percent_of_work}%
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
