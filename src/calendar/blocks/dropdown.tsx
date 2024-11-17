import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  title: string;
  value: string;
}

export const Dropdown: React.FC<Props> = ({ title, value }) => {
  return (
    <div
      style={{
        background: "#EDEDED",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5px",
        borderRadius: "20px",
        gap: "5px",
        fontSize: '12px'
      }}
    >
      <div style={{ padding: "5px" }}>
        <div>{title}</div>
        <div>{value}</div>
      </div>
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  );
};
