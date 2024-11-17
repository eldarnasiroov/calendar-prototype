import { Content } from "./blocks/content";

export const Body = () => {
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
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
    </div>
  );
};
