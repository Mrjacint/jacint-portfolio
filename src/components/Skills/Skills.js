import React from "react";

import reactIcon from "../../assets/img/logos/React.png";
import htmlIcon from "../../assets/img/logos/HTML5.png";
import bootstrapIcon from "../../assets/img/logos/Bootstrap.png";
import javaScriptIcon from "../../assets/img/logos/Javascript.png";
import cssIcon from "../../assets/img/logos/CSS3.png";
import jQueryIcon from "../../assets/img/logos/jQuery.png";

import reduxIcon from "../../assets/img/logos/redux.png";
import typeScriptIcon from "../../assets/img/logos/typescript.png";
import nextIcon from "../../assets/img/logos/Nextjs.png";
import jestIcon from "../../assets/img/logos/jest.png";
import enzymeIcon from "../../assets/img/logos/enzyme.png";
import gitIcon from "../../assets/img/logos/git.png";

import vscIcon from "../../assets/img/logos/Visual_Studio_Code.png";
import githubIcon from "../../assets/img/logos/Github.png";
import laravelIcon from "../../assets/img/logos/Laravel.png";
import phpIcon from "../../assets/img/logos/PHP.png";
import mySQLIcon from "../../assets/img/logos/MySQL.png";
import photoshopIcon from "../../assets/img/logos/Photoshop.png";

const Skills = () => {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p></p>
        </div>

        <div className="row skills-content">
          <div className="card col-sm-6 col-md-4 col-lg-2" data-aos="fade-up">
            <img src={htmlIcon} className="card-img-top" alt="HTML-icon" />
            <div className="card-body">
              <p className="card-text">HTML 5</p>
            </div>
          </div>

          <div
            className="card col-sm-6 col-md-4 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <img src={cssIcon} className="card-img-top" alt="CSS3-icon" />
            <div className="card-body">
              <p className="card-text">CSS 3</p>
            </div>
          </div>

          <div
            className="card col-sm-6 col-md-4 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <img
              src={javaScriptIcon}
              className="card-img-top"
              alt="JavaScript-icon"
            />
            <div className="card-body">
              <p className="card-text">JavaScript</p>
            </div>
          </div>

          <div
            className="card col-sm-6 col-md-4 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src={reactIcon} className="card-img-top" alt="React-icon" />
            <div className="card-body">
              <p className="card-text">React js.</p>
            </div>
          </div>

          <div
            className="card col-sm-6 col-md-4 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <img src={jQueryIcon} className="card-img-top" alt="jQuery-icon" />
            <div className="card-body">
              <p className="card-text">jQuery</p>
            </div>
          </div>

          <div
            className="card col-sm-6 col-md-4 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src={bootstrapIcon}
              className="card-img-top"
              alt="Bootstrap-icon"
            />
            <div className="card-body">
              <p className="card-text">Bootstrap</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="card col-sm-6 col-md-4 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <img src={phpIcon} className="card-img-top" alt="PHPs-icon" />
            <div className="card-body">
              <p className="card-text">PHP</p>
            </div>
          </div>

          <div
            className="card col-sm-6 col-md-4 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img src={mySQLIcon} className="card-img-top" alt="MySQL-icon" />
            <div className="card-body">
              <p className="card-text">MySQL</p>
            </div>
          </div>

          <div
            className="card col-sm-6 col-md-4 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <img
              src={laravelIcon}
              className="card-img-top"
              alt="Laravel-icon"
            />
            <div className="card-body">
              <p className="card-text">Laravel</p>
            </div>
          </div>

          <div
            className="card col-sm-6 col-md-4 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img src={githubIcon} className="card-img-top" alt="Github-icon" />
            <div className="card-body">
              <p className="card-text">Github</p>
            </div>
          </div>

          <div
            className="card col-sm-6 col-md-4 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="550"
          >
            <img
              src={vscIcon}
              className="card-img-top"
              alt="Visual Studio Code-icon"
            />
            <div className="card-body">
              <p className="card-text">Visual Studio Code</p>
            </div>
          </div>

          <div
            className="card col-sm-6 col-md-4 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img
              src={photoshopIcon}
              className="card-img-top"
              alt="Photoshop-icon"
            />
            <div className="card-body">
              <p className="card-text">Photoshop</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="card col-sm-6 col-md-4 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <img src={reduxIcon} className="card-img-top" alt="PHPs-icon" />
            <div className="card-body">
              <p className="card-text">Redux js.</p>
            </div>
          </div>

          <div
            className="card col-sm-6 col-md-4 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src={typeScriptIcon}
              className="card-img-top"
              alt="MySQL-icon"
            />
            <div className="card-body">
              <p className="card-text">TypeScript</p>
            </div>
          </div>

          <div
            className="card col-sm-6 col-md-4 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <img src={jestIcon} className="card-img-top" alt="Laravel-icon" />
            <div className="card-body">
              <p className="card-text">Jest js.</p>
            </div>
          </div>

          <div
            className="card col-sm-6 col-md-4 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img src={enzymeIcon} className="card-img-top" alt="Github-icon" />
            <div className="card-body">
              <p className="card-text">Enzyme js.</p>
            </div>
          </div>

          <div
            className="card col-sm-6 col-md-4 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="550"
          >
            <img
              src={gitIcon}
              className="card-img-top"
              alt="Visual Studio Code-icon"
            />
            <div className="card-body">
              <p className="card-text">Git</p>
            </div>
          </div>

          <div
            className="card col-sm-6 col-md-4 col-lg-2"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img src={nextIcon} className="card-img-top" alt="Photoshop-icon" />
            <div className="card-body">
              <p className="card-text">Next js.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
