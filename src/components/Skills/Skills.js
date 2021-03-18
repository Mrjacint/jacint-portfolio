import React from "react";

const delay = 50;

const skillsArr = [
  {
    name: "HTML 5",
    link: "/img/logos/HTML5.png",
  },
  {
    name: "CSS 3",
    link: "/img/logos/CSS3.png",
  },
  {
    name: "JavaScript",
    link: "/img/logos/Javascript.png",
  },
  {
    name: "React js.",
    link: "/img/logos/React.png",
  },
  {
    name: "Redux js.",
    link: "/img/logos/redux.png",
  },
  {
    name: "TypeScript",
    link: "/img/logos/typescript.png",
  },

  {
    name: "Jest js.",
    link: "/img/logos/jest.png",
  },
  {
    name: "Enzyme js.",
    link: "/img/logos/enzyme.png",
  },
  {
    name: "Bootstrap",
    link: "/img/logos/Bootstrap.png",
  },
  {
    name: "Git",
    link: "/img/logos/git.png",
  },
  {
    name: "Github",
    link: "/img/logos/Github.png",
  },
  {
    name: "jQuery",
    link: "/img/logos/jQuery.png",
  },

  {
    name: "Next js.",
    link: "/img/logos/Nextjs.png",
  },
  {
    name: "Visual Studio Code",
    link: "/img/logos/Visual_Studio_Code.png",
  },
  {
    name: "Photoshop",
    link: "/img/logos/Photoshop.png",
  },
  {
    name: "MySQL",
    link: "/img/logos/MySQL.png",
  },
  {
    name: "PHP",
    link: "/img/logos/PHP.png",
  },
  {
    name: "Laravel",
    link: "/img/logos/Laravel.png",
  },
];

const content = skillsArr.map((skill, index) => {
  return (
    <div
      key={skill.name}
      className="card col-sm-6 col-md-4 col-lg-2"
      data-aos="fade-up"
      data-aos-delay={delay * index}
    >
      <img
        src={skill.link}
        className="card-img-top"
        alt={`${skill.name}-icon`}
      />
      <div className="card-body">
        <p className="card-text">{skill.name}</p>
      </div>
    </div>
  );
});

const Skills = () => {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p></p>
        </div>

        <div className="row skills-content">{content}</div>
      </div>
    </section>
  );
};

export default Skills;
