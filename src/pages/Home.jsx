import React from 'react'
import About from "./About";
import Fact from "./Fact";
import Skill from "./Skill";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import SoftSkill from './SoftSkill';

const Home = ({ info, skill, resume, infoProject, softSkill }) => {
  // console.log(info);
  return (
    <div >
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center" style={{
        backgroundImage: `url(https://res.cloudinary.com/vannam042/image/upload/v1680102137/z3058808865820_6bb511c3b414d15db5f34b4d536c55ce_shvb3e.jpg)`
      }}>
        <div className="hero-container">
          <h1>Ngô Văn Nam</h1>
          <p>I will be a Fullstack Developer</p>
        </div>
      </section>
      <About />
      {/* <Fact /> */}
      <Skill skill={skill} />
      <SoftSkill softSkill={softSkill} />
      <Resume resume={resume} />
      <Portfolio infoProject={infoProject} />
      {/* <Testimonials /> */}
      <Contact info={info} />
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </div>
  )
}

export default Home