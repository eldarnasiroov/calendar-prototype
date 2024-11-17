import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Tree } from "../../../tree";
import { initialBrigadeList } from "../../common/data";
import "./dropdown.scss";

interface Props {
  title: string;
  value: string;
  children?: React.ReactNode;
}

export const Dropdown: React.FC<Props> = ({ title, value, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        style={{
          background: "#EDEDED",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "5px",
          borderRadius: "20px",
          gap: "5px",
          fontSize: "12px",
          cursor: "pointer",
          position: "relative",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div style={{ padding: "5px" }}>
          <div>{title}</div>
          <div>{value}</div>
        </div>
        <FontAwesomeIcon icon={faChevronDown} color="orange" />
        {isOpen && (
          <div
            className="calendar-dropdown"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              backgroundColor: "#fff",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "4px",
              zIndex: 10,
              width: "350px",
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div
              className="calendar-dropdown__content"
              style={{
                cursor: "pointer",
              }}
            >
              {children}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
