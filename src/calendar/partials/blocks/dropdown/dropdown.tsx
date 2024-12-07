import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import "./dropdown.scss";

interface Props {
  title: string;
  value: string;
  children?: React.ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  leftButton?: React.ReactNode;
}

export const Dropdown: React.FC<Props> = ({
  title,
  value,
  children,
  open,
  setOpen = () => {},
  leftButton,
}) => {
  return (
    <>
      <div className="calendar-dropdown__wrapper">
        {leftButton && leftButton}
        <div
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
          onClick={() => setOpen(!open)}
        >
          <div style={{ padding: "5px" }}>
            <div>{title}</div>
            <div>{value}</div>
          </div>
          <FontAwesomeIcon
            icon={open ? faChevronUp : faChevronDown}
            color="orange"
          />
        </div>
        <div
          className="calendar-dropdown"
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={{
            maxHeight: open ? "500px" : 0,
            width: open ? "350px" : 0,
            transition: "max-height 0.3s ease, width 0.3s ease",
            overflow: open ? "scroll" : "hidden",
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
