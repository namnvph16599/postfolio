import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div><section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Work Experience</h2>
        </div>

        <div className="row">
          <div className="col-lg-12" >
            <div className="resume-item">
              <h4>ONCUSTOMER - NOVAON TECH</h4>
              <h5>4/2022 - 12/2022</h5>
              <p><em>Developer ReactJs/NodeJs</em></p>
              <span>Technology: </span><span>ReactJs, Redux, Antd, Lodash, ExpressJs, MongoDB</span>

              <p>Main responsibilities: </p>
              <span>- Maintain and develop interface and features of the system.</span>
              <br />
              <span>- Build reports: ticket, service task.</span>
              <br />
              <span>- Build the function of decentralization of the system.
              </span>
              <br />
            </div>
          </div>
        </div>


      </div>
    </section>
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">

          <div className="section-title">
            <h2>Projects</h2>
          </div>

          <div className="row">
            <div className="col-lg-12" >
              <div className="resume-item">
                <h5>Project Name: My Portfolio</h5>
                <span>Domains: </span> <a href='https://nvnam042postfolio.vercel.app/' target="_blank">https://nvnam042postfolio.vercel.app/</a><br />
                <span>Source code: </span> <a href='https://github.com/namnvph16599/postfolio' target="_blank">https://github.com/namnvph16599/postfolio</a><br />
                <span>Technology: </span><span>val.technology</span>
                <hr />
              </div>
            </div>
            <div className="col-lg-12" >
              <div className="resume-item">
                <h5>Project Name: Manage and booking motorcycle repair</h5>
                <p>Source code: </p>
                <span>Fe: </span>
                <a href='https://github.com/namnvph16599/PRO220_FE/tree/developer' target="_blank">https://github.com/namnvph16599/PRO220_FE/tree/developer</a><br />
                <span>Be: </span>
                <a href='https://github.com/namnvph16599/PRO220_BE/tree/developer' target="_blank">https://github.com/namnvph16599/PRO220_BE/tree/developer</a><br />
                <span>Technology: </span><span>ReactJs, Redux, Ant Design,
                  ExpressJs, MongoDB,
                  JWT, Fisebase</span>
                <hr />
              </div>
            </div>
            <div className="col-lg-12" >
              <div className="resume-item">
                <h5>Project Name : Todo Events
                </h5>
                <span>Source code: </span> <a href='https://github.com/namnvph16599/nextjs-todo-events' target="_blank">https://github.com/namnvph16599/nextjs-todo-events</a><br />
                <span>Technology: </span><span>NextJs</span>
                <hr />
              </div>
            </div>
          </div>


        </div>
      </section></div>
  )
}

export default Portfolio