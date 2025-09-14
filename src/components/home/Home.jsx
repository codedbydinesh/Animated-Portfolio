import React from "react";
import man from "../../assets/man.png";

import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Home() {

  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from('.line1',{
      y:50,
      duration:1,
      opacity:0
    })
    tl1.from('.line2',{
      y:50,
      duration:1,
      opacity:0
    })
    tl1.from('.line3',{
      y:50,
      duration:1,
      opacity:0
    })
    gsap.from('.right-home img',{
      x:200,
      duration:1,
      opacity:0
    })
  })

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
