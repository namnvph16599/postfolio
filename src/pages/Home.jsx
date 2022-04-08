import React from 'react'
import About from "./About";
import Fact from "./Fact";
import Skill from "./Skill";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Home = ({ info, skill, resume }) => {
  // console.log(info);
  return (
    <div >
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center" style={{
        backgroundImage: `url(${info?.image})`
      }}>
        <div className="hero-container" data-aos="fade-in">
          <h1>{info?.name}</h1>
          <p>I'm web developer</p>
        </div>
      </section>
      <About info={info} />
      {/* <Fact /> */}
      <Skill skill={skill} />
      <Resume resume={resume} />
      <Portfolio />
      {/* <Services /> */}
      {/* <Testimonials /> */}
      <Contact info={info} />
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </div>
  )
}

export default Home