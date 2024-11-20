import { Content } from "./blocks/content";
import { map } from "lodash";

export const Body = () => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div
      style={{
        marginTop: "10px",
        fontSize: "12px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "5px",
      }}
    >
      {map(data, (item, index) => (
        <Content key={item} index={index} />
      ))}
    </div>
  );
};
