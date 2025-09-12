import React from "react";
import man from "../../assets/man.png";

import "./Home.css";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <div id="home">
      <div className="left-home">
        <div className="home-details">
          <div className="line1">I am</div>
          <div className="line2">Dinesh Kumar Kori</div>
          <div className="line3">
            <Typewriter
              words={["MERN DEVELOPER", "FULL STACK DEVELOPER"]}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              loop={0}
            />
          </div>
          <button>Hire me!</button>
        </div>
      </div>
      <div className="right-home">
        <img src={man} alt="" />
      </div>
    </div>
  );
}

export default Home;
