import "./App.css";
import Codex from "./components/Codex";
import DropInText from "./components/DropInText";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import RapidCheckout from "./components/RapidCheckout";
import HomeGaurd from "./components/HomeGaurd";
import Korner from "./components/Korner";
import Hostel from "./components/Hostel";

// 790

function App() {
  const ref = useRef();
  return (
    <>
    <Parallax pages={6} className="mainparallax" ref = {ref}>
        <ParallaxLayer offset = {0} speed={.4} factor = {2}className="b">
        <div className="wrapper">
        <div className="flex-container">
        <div className="text">
              <DropInText />
              <a href="https://github.com/DhruvGupta3377" target="_blank" >Github</a>&nbsp;&nbsp;
              <a href="https://twitter.com/dhruvgupta3377" target="_blank">Twitter</a>&nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/dhruv-gupta-465391227/" target="_blank">LinkedIn</a>&nbsp;&nbsp;
              <a href="" target="_blank">Resume</a>&nbsp;&nbsp;
        </div>
          <div className="links">
              <div className="project-list">
                <h3>Selected Projects</h3>
                <div className="button" onClick={() => ref.current.scrollTo(1)}>Codex</div>
                <div className="button" onClick={() => ref.current.scrollTo(2)}>RapidCheckout</div>
                <div className="button" onClick={() => ref.current.scrollTo(3)}>Korner</div>
                <div className="button" onClick={() => ref.current.scrollTo(4)}>Hostel Room Allotment System</div>
                <div className="button" onClick={() => ref.current.scrollTo(5)}>Home Gaurd</div>
              </div>
            </div>
          </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} className="b1" speed={0.4}>
          <h2>Codex</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1} className="b1" speed={0.6}>
          <Codex/>
        </ParallaxLayer>

        <ParallaxLayer offset={2} className="b2" speed={0.4}>
          <h2>RapidCheckout</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={2} className="b2" speed={0.6}>
        <RapidCheckout/>
        </ParallaxLayer>

        <ParallaxLayer offset={3} className="b3" speed={0.4}>
          <h2>Korner</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={3} className="b3" speed={0.6}>
          <Korner/>
        </ParallaxLayer>

        <ParallaxLayer offset={4} className="b3" speed={0.4}>
        <h2>Hostel Allotment System</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={4} className="b3" speed={0.6}>
        <Hostel/>
        </ParallaxLayer>

      <ParallaxLayer offset={5} className="b3" speed={0.4}>
          <h2>Home Guard</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={5} className="b3" speed={0.6}>
          <HomeGaurd/>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
