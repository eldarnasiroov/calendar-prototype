import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ITreeNode } from "../../../tree/common/types";
import "./leftColumn.scss";
import { find } from "lodash";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { getCountOfWorkplaces } from "../../../tree/common/helpers";

interface Props {
  data: ITreeNode;
}

export const LeftColumn: React.FC<Props> = ({ data }) => {
  if (!data) return null;

  const isBrigade = data?.type === "brigade";
  const brigadier = find(
    data?.children,
    (item: ITreeNode) => item?.worker?.isBrigadier
  );

  return (
    <div className="calendar-left-column">
      <div>
        <div className="column-avatar_wrapper">
          <div
            className="column-avatar"
            style={{
              borderColor: "black",
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
            <span className="color-violet fw-bold">{0}</span> на
          </p>
          <p className=" fw-bold">{0}₽</p>
          <p className="fw-bold color-white">{0}%</p>
        </div>
      )}
    </div>
  );
};
