import React from 'react';
import portfolioImg1 from '../../assets/img/portfolio/portfolio-1.jpg';
import portfolioImg2 from '../../assets/img/portfolio/portfolio-2.jpg';
import portfolioImg3 from '../../assets/img/portfolio/portfolio-3.jpg';

const Portfolio = (props) => {
    return (
        <section id="portfolio" ref={props.portfolio} className="portfolio section-bg">
          <div className="container">

            <div className="section-title">
              <h2>Portfolio</h2>
            </div>

            <div className="row portfolio-container">

              <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-aos="fade-up">
                <div className="portfolio-wrap">
                  <img src={portfolioImg1} className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <a target="_blank" rel="noopener noreferrer" href="https://thehousefairy.net/" data-gall="portfolioGallery" className="venobox" title="The House Fairy Website">
                      <i className="bx bx-plus"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Mrjacint/jacint-portfolio" title="More Details">
                      <i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-aos="fade-up" data-aos-delay="100">
                <div className="portfolio-wrap">
                  <img src={portfolioImg2} className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <a href="https://clone-52c09.web.app/" data-gall="portfolioGallery" className="venobox" title="YouTube Clone">
                      <i className="bx bx-plus"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Mrjacint/youtube-clone" title="More Details">
                      <i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-aos="fade-up" data-aos-delay="200">
                <div className="portfolio-wrap">
                  <img src={portfolioImg3} className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <a href=" " data-gall="portfolioGallery" className="venobox" title="It's should be a React + Redux app">
                      <i className="bx bx-plus"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Mrjacint" title="More Details">
                      <i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </section>

    );
}

export default Portfolio;