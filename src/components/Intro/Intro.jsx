import React from "react";
import Portrait from "../../images/circle-cropped.png";

import "./Intro.css";

const Intro = () => {
  return (
    <div className="container vertCenter">
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8 introPos">
          <img
            className="portraitCir"
            src={Portrait}
            alt="Portrait of Raleigh Chesney"
          />
          <p id="introPar">
            I am a creative front-end developer in Atlanta, Georgia specializing
            in full-stack Javascript programming with an emphasis on user
            interaction and application logic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
