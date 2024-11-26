import "./App.css";
import { Calendar } from "./calendar";

function App() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        // background: "grey",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          // background: "red",
          padding: "5px",
        }}
      >
        <Calendar />
      </div>
    </div>
  );
}

export default App;
