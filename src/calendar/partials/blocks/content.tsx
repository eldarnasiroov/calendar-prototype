export const Content = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "80px",
          aspectRatio: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            background: "green",
            borderRadius: "50%",
          }}
        ></div>
      </div>
    </div>
  );
};
