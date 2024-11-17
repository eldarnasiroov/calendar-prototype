import { Tree } from "../tree";
import "./calendar.scss";
import { initialBrigadeList } from "./common/data";
import { Test } from "./partials/blocks/test";
import { Body } from "./partials/body";
import { Header } from "./partials/header";

export const Calendar = () => {
  return (
    <div
      className="calendar-wrapper"
      style={{
        width: "100%",
        padding: "5px",
        background: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      {/* <Test /> */}
      <Body />
      <Tree nodes={initialBrigadeList} />
    </div>
  );
};
