import React from "react";

import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div className="card">
            <p id="aboutPar"><i className="fas fa-info-circle fa-lg"></i>
            My previous experiences in woodworking, printmaking, and book-binding
              taught me the joy of creating products and experiences that appeal
              to people’s senses. With a new career path in development goal is
              to build experiences that are functional, efficient, and joyful to
              use. I seek a role as a front-end developer at a company where I
              never stop learning, growing, and creating products I am proud of.
              <br/>
              <i className="fas fa-arrow-circle-left fa-lg"></i>
              I was born and raised in Griffin, GA. After getting my Bachelor of
              Fine Arts in Printmaking and Sculpture at the University of
              Georgia, I moved to Madison, Wisconsin and worked at a pattern
              making wood shop. After a few years I moved back to Georgia and
              began working for myself as a handyman and freelance Architectural
              drafter until I found what career path I wanted to pursue full
              time. 
              <br/>
              <i className="fas fa-arrow-circle-right fa-lg"></i>
              While creating a portfolio site to showcase my work I
              discovered a love for web development and design. After learning
              code through youtube tutorials and sites like freecodecamp. I
              decided that web development was something I wanted to pursue full
              time. To kickstart this career move I enrolled in the Full-Stack
              Development bootcamp at Georgia Tech. There I learned new coding
              languages, best practices, how to research and apply new
              information quickly. The program gave me a solid foundation of
              development skills for me to continue to build upon.
              <br/>
              <i className="far fa-address-book fa-lg"></i>
              My Github, Linked In, and resume can be found in the top right of this page. I look forward to connecting with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
