import "./App.css";
import Codex from "./components/Codex";
import DropInText from "./components/DropInText";
import { useRef } from "react";
import RapidCheckout from "./components/RapidCheckout";
import HomeGaurd from "./components/HomeGaurd";
import Korner from "./components/Korner";
import Hostel from "./components/Hostel";

// 790

function App() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();

  function clickHandler(element) {
    element.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className="flex-container">
        <div className="text">
          <DropInText />
          <a href="https://github.com/DhruvGupta3377" target="_blank">
            Github
          </a>
          &nbsp;&nbsp;
          <a href="https://twitter.com/dhruvgupta3377" target="_blank">
            Twitter
          </a>
          &nbsp;&nbsp;
          <a
            href="https://www.linkedin.com/in/dhruv-gupta-465391227/"
            target="_blank"
          >
            LinkedIn
          </a>
          &nbsp;&nbsp;
          <a href="https://drive.google.com/file/d/1jU_UAD8vCFvcDvgBCgc2-AVs5f0tmwSE/view?usp=sharing" target="_blank">
            Resume
          </a>
          &nbsp;&nbsp;
        </div>
        <div className="links">
          <div className="project-list">
            <h3>Selected Projects</h3>
            <div className="button" onClick={() => clickHandler(ref1)}>
              Codex
            </div>
            <div className="button" onClick={() => clickHandler(ref2)}>
              RapidCheckout
            </div>
            <div className="button" onClick={() => clickHandler(ref3)}>
              Korner
            </div>
            <div className="button" onClick={() => clickHandler(ref4)}>
              Hostel Room Allotment System
            </div>
            <div className="button" onClick={() => clickHandler(ref5)}>
              Home Gaurd
            </div>
          </div>
        </div>
      </div>

      <h2 ref={ref1}>Codex</h2>
      <Codex />
      <center>
        <img classname="gifs" src="codex.gif" />
      </center>
      <h2 ref={ref2}>RapidCheckout</h2>
      <RapidCheckout />
      <center>
        <img classname="gifs" src="rapidcheckout.gif" />
      </center>
      <h2 ref={ref3}>Korner</h2>
      <Korner />
      <center>
        <img classname="gifs" src="korner.gif" />
      </center>
      <h2 ref={ref4}>Hostel Allotment System</h2>
      <Hostel />
      <h2 ref={ref5}>Home Guard</h2>
      <HomeGaurd />
    </>
  );
}

export default App;
