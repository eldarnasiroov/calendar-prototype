import "./App.css";
import { Calendar } from "./calendar";

function App() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: "gray",
      }}
    >
      <Calendar />
    </div>
  );
}

export default App;
