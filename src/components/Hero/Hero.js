import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>Jacint Udvarlaki</h1>
            <p>I'm &nbsp;
                    <Typed 
                        strings={[
                            'Software Engineer', 
                            'Web Developer']} 
                        typeSpeed={50}
                        backSpeed={70} 
                        backDelay={2000}
                        loop={true} />
            </p>
        </div>
      </section>
    );
}

export default Hero;