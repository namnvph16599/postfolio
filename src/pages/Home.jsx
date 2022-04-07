import React from 'react'
import About from "./About";
import Fact from "./Fact";
import Skill from "./Skill";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Home = () => {
  return (
    <div >
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>Ngô Văn Nam</h1>
          <p>I'm web developer</p>
        </div>
      </section>
      <About />
      <Fact />
      <Skill />
      <Resume />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </div>
  )
}

export default Home