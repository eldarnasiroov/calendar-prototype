import { map } from "lodash";
import "./timeline.scss";

export const Timeline = () => {
  const JANUARY = 0;
  function getDaysOfMonth(year, month) {
    // Месяц начинается с 0
    const daysInMonth = new Date(year, month, 0).getDate();

    const daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i.toString());
    }

    return daysArray;
  }
  return (
    <div
      style={{
        // width: "50px",
        width: "100%",
        minWidth: "60px",
        maxWidth: "80px",
        height: "100%",
        background: "grey",
        display: "flex",
        flexDirection: "column",
        // marginBottom: '50px'
        // paddingTop: "5px",
        marginTop: "10px",
      }}
    >
      <div>
        <div
          className="column-avatar_wrapper"
          //   onClick={() => dispatch(setSelectedEntities(data))}
        >
          <div
            className="column-avatar"
            style={
              {
                //   borderColor: borderColors[index % borderColors.length],
              }
            }
          >
            <img
              src={"no_image_worker.svg"}
              alt=""
              className="column-avatar_image"
            />
          </div>
        </div>
      </div>
      {map(getDaysOfMonth(2024, JANUARY), (item) => {
        return (
          <div
            key={item}
            style={{
              width: "100%",
              padding: "5px",
              height: "100px",
              borderBottom: "2px solid black",
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};
