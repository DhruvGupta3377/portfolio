import "./App.css";
import DropInText from "./components/DropInText";

function App() {
  return (
    <>
      <div className="flex-container">
        <div className="text">
          <DropInText />
        </div>
        <div className="links">
          <div className="project-list">
          <h3>
          Selected Projects
          </h3>
            <div className="button">Codex</div>
            <div className="button">RapidCheckout</div>
            <div className="button">Korner</div>
            <div className="button">Hostel Room Allotment System</div>
            <div className="button">Tiper</div>
            <div className="button">House Gaurd</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
