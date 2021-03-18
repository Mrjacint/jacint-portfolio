import React from "react";

const delay = 100;

const portfolios = [
  {
    demo: "https://thehousefairy.net/",
    source: "https://github.com/Mrjacint/jacint-portfolio",
    title: "The House Fairy Website",
    img: "./img/portfolio/portfolio-1.jpg",
  },
  {
    demo: "https://mrjacint.github.io/paint-clone/",
    source: "https://github.com/Mrjacint/paint-clone",
    title: "Paint Clone",
    img: "./img/portfolio/portfolio-4.png",
  },
  {
    demo: "https://mrjacint.github.io/spock-rock-game/",
    source: "https://github.com/Mrjacint/spock-rock-game",
    title: "Spock Rock Game",
    img: "./img/portfolio/portfolio-5.png",
  },
  {
    demo: "https://mrjacint.github.io/joke-teller/",
    source: "https://github.com/Mrjacint/joke-teller",
    title: "Joke Teller App",
    img: "./img/portfolio/portfolio-6.png",
  },
  {
    demo: "https://mrjacint.github.io/robofriends/",
    source: "https://github.com/Mrjacint/robofriends",
    title: "Robofriends",
    img: "./img/portfolio/portfolio-7.png",
  },
  {
    demo: "",
    source: "https://github.com/Mrjacint/",
    title: "Content coming soon!",
    img: "./img/portfolio/portfolio-3.jpg",
  },
];

const content = portfolios.map((pfolio, index) => {
  return (
    <div
      className="col-lg-4 col-md-6 portfolio-item filter-app"
      data-aos="fade-up"
      data-aos-delay={delay * index}
      key={index}
    >
      <div className="portfolio-wrap">
        <img src={pfolio.img} className="img-fluid" alt="" />
        <div className="portfolio-links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={pfolio.demo}
            data-gall="portfolioGallery"
            className="venobox"
            title={pfolio.title}
          >
            <i className="bx bx-plus"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={pfolio.source}
            title="Source Code"
          >
            <i className="bx bx-link"></i>
          </a>
        </div>
      </div>
    </div>
  );
});

const Portfolio = (props) => {
  return (
    <section
      id="portfolio"
      ref={props.portfolio}
      className="portfolio section-bg"
    >
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
        </div>
        <div className="row portfolio-container">{content}</div>
      </div>
    </section>
  );
};

export default Portfolio;
