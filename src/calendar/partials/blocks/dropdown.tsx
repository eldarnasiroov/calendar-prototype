import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

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
        className="calendar-dropdown__wrapper"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div style={{ padding: "5px" }}>
          <div>{title}</div>
          <div>{value}</div>
        </div>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          color="orange"
        />
        <div
          className="calendar-dropdown"
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={{
            maxHeight: isOpen ? "500px" : 0,
            width: isOpen ? "350px" : 0,
            transition: "max-height 0.3s ease, width 0.3s ease",
            overflow: isOpen ? "scroll" : "hidden",
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
      </div>
    </>
  );
};
