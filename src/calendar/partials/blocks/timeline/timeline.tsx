import { map } from "lodash";
import "./timeline.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
        display: "flex",
        width: "100%",
        minWidth: "60px",
        maxWidth: "80px",
      }}
    >
      <div
        style={{
          // width: "50px",
          width: "100%",
          minWidth: "60px",
          maxWidth: "80px",
          height: "100%",
          background: "#F6FEE6",
          display: "flex",
          flexDirection: "column",
          // marginBottom: '50px'
          // paddingTop: "5px",
          // marginTop: "10px",
        }}
      >
        <div style={{marginRight: '4px', marginBottom: '10px', opacity: '0'}}>
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
          <div
            className="calendar-orders_title"
            style={{
              background: "#FFB20A",
            }}
          >
            {/* {data.name} */} tt
          </div>

          <div className="calendar-brigade_rating">
            <span>4.6</span>
            <FontAwesomeIcon
              icon={faStar}
              color="#FFB20A"
              style={{ marginTop: "3px" }}
            />
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
                borderBottom: "2px solid #D3D3D3",
                borderRight: "2px solid #D3D3D3",
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};
