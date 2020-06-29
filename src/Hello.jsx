import React from "react";

const About = () => {
  return (
    <div className="ui main container">
      <div class="ui stackable two column grid">

        <div class="column">
          <h1 id='about-header' className="ui header">About me</h1>
          <p id="about-me-text">
            Hello, My name is Felix i'm a bilingual Junior Web Developer, with previous experience within the insurance, retail and art industry.
            During the past 10 years, I have acquired a broad set of both hard and soft skills applicable across different industries.
            Having extensive experience working in B2B and B2C roles, can create and test codes for apps and web development.
            Hands-on, innovative and a problem solver with keen attention to details.
        </p>
        <img id="FelixBild" src="/src/Img/FelixProfil.jpg" />
        </div>
      </div>
    </div>
  );

};

export default About;