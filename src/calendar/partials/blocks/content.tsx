export const Content = ({ index }) => {
  const colors = {
    0: "#1745E1",
    1: "#FD3132",
    2: "#3EAC4D",
    3: "#1745E1",
    4: "#FD3132",
    5: "#3EAC4D",
    6: "#1745E1",
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100px",
        minWidth: '60px', 
        height: "100vh",
        background: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        borderRadius: "40px 40px 0 40px",
        borderRight: `4px solid ${colors[index]}`,
        // borderTop: `4px solid ${colors[index]}`,
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          // maxWidth: "80px",
          aspectRatio: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          right: "-4px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "50%",
            overflow: "hidden",
            border: `4px solid ${colors[index]}`,
            borderLeft: `4px dotted ${colors[index]}`,
            margin: 0,
            transform: "rotate(45deg)",
          }}
        >
          <img
            src="no_image_worker.svg"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "rotate(-45deg)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
