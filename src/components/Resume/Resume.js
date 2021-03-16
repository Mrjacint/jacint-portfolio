import React from "react";

// Temporarily removed

const Resume = (props) => {
  return (
    <section id="resume" ref={props.resume} className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>
            I am a self-motivated individual who enjoys all aspects of software
            and web development. I am friendly, sincere, honest and hardworking.
            I enjoy working in a multicultural team. I can work on my own and I
            am also a good team player. I am comfortable with all aspects of
            learning and can adapt to the new environment quickly.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Education</h3>

            <div className="resume-item">
              <h4>BSc (Hons) Computing &amp; Information Systems</h4>
              <h5>2015 - 2016</h5>
              <p>
                <em>University of West London, London </em>
              </p>
              <p>
                <u>Main modules:</u> Development Methodologies; Applied Software
                Engineering; IT Industry; IS Project Management; Advanced
                Databases; Project Development
              </p>
            </div>

            <div className="resume-item">
              <h4>HND in Information Technology</h4>
              <h5>2013 - 2015</h5>
              <p>
                <em>London School of Science and Technologies, London </em>
              </p>
              <p>
                <u>Main modules:</u> Website Design; Web Application
                Development; Business Skills for E-Commerce; System Analysis and
                Design; Procedural Programming; Java Programming; Digital Image
                Creation; Project Design Implementation and Evaluation; Computer
                Games Design and Development; Computer Systems; Wide Area
                Networking; Internet Server Management.
              </p>
            </div>

            <div className="resume-item">
              <h4>Matura examination</h4>
              <h5>2001 - 2004</h5>
              <p>
                <em>
                  Kölcsey Ferenc Secondary Grammar School, Rakamaz, Hungary
                </em>
              </p>
              <p>A-level equivalent school leaving certificate.</p>
            </div>

            <div className="resume-item">
              <h4>Mechanical technician</h4>
              <h5>1992 - 1995</h5>
              <p>
                <em>107 no. Secondary Technical School, Hungary</em>
              </p>
              <p>
                <u>Main subjects:</u> Knowledge of materials; architectural
                drawing; professional knowledge; measurement
              </p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Employment History</h3>

            <div className="resume-item">
              <h4>Co-founder</h4>
              <h5>2016 - Present</h5>
              <p>
                <em>The House Fairy Cleaning Services, London</em>
              </p>
              <p>
                Build a website (thehousefairy.net), design logos and banners,
                handling ads, creating letters and tables patterns, managing
                staff duties and all general things that need to run a business
                like handling client's requests, accounting, managing staff
                duties, etc.
              </p>
            </div>

            <div className="resume-item">
              <h4>Multi Drop Driver</h4>
              <h5>2011 - 2013</h5>
              <p>
                <em>Nila Food, London</em>
              </p>
              <p>
                Making deliveries to third party business premises, driving
                vehicles on scheduled routes to pick up and then deliver stock.
                Completing the correct documentation when booking goods in & out
                for delivery, planning a route.
              </p>
            </div>

            <div className="resume-item">
              <h4>Domino's Pizza delivery man</h4>
              <h5>2009 - 2011</h5>
              <p>
                <em>Sherman Ltd, London</em>
              </p>
              <p>
                Delivering orders to the customers, taking orders by phone or
                walking in customers.
              </p>
            </div>

            <div className="resume-item">
              <h4>Mechanical Technician</h4>
              <h5>2004 - 2009</h5>
              <p>
                <em>Nyirsegi Nyomda Rt, Nyiregyhaza, Hungary</em>
              </p>
              <p>
                Weekly maintaining all printing machines at the company,
                searching for any possible machine failure and finding a
                solution for it or changing any faulty parts.
              </p>
            </div>

            <div className="resume-item">
              <h4>Mechanical Technician</h4>
              <h5>1995 - 2001</h5>
              <p>
                <em>EKO Kft, Nyiregyhaza, Hungary</em>
              </p>
              <p>
                Analysing test results, machine error messages and information
                obtained from operators in order to diagnose equipment problems.
                Repairing and replacing broken or malfunctioning components of
                machinery and equipment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
