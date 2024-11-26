export const Content = ({ index, data }) => {
  console.log("🚀 ~ Content ~ data:", data);
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
        minWidth: "60px",
        height: "100vh",
        // background: "yellow",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // gap: "10px",
        // justifyContent: "center",
        // justifyContent: "center",
        // alignItems: "start",
        borderRadius: "40px 40px 0 40px",
        borderRight: `4px solid ${colors[index]}`,
        // borderTop: `4px solid ${colors[index]}`,
        position: "relative",
        // overflow: "hidden",
      }}
    >
      <div>
        <div
          style={{
            width: "100%",
            // maxWidth: "80px",
            aspectRatio: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // position: "absolute",
            // right: "-4px",
            overflow: "hidden",
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

      {/* Контейнер для задач */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", paddingRight: "5px" }}>
        <div
          style={{
            width: "100%",
            background: "orange",
            // maxWidth: "100px",
            textAlign: "center",
            fontSize: "12px",
            // wordBreak: "break-all",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            // marginRight: "5px",
          }}
        >
          {data.node.name}
        </div>
        <div
          style={{
            width: "100%",
            height: "70px",
            background: "red",
            borderRadius: "10px",
            padding: "5px",
            marginTop: "10px",
            // marginRight: "5px",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "50px",
            background: "orange",
            borderRadius: "10px",
            padding: "5px",
            marginTop: "10px",
            // marginRight: "5px",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "60px",
            background: "green",
            borderRadius: "10px",
            padding: "5px",
            marginTop: "10px",
            // marginRight: "5px",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "80px",
            background: "blue",
            borderRadius: "10px",
            padding: "5px",
            marginTop: "10px",
            // marginRight: "5px",
          }}
        ></div>
      </div>
    </div>
  );
};
