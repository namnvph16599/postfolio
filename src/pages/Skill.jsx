import React from 'react'

const Skill = () => {
  return (
    <div>
      <section id="skills" className="skills section-bg">
        <div className="container">

          <div className="section-title">
            <h2>Skills</h2>
          </div>

          <div className="col-lg-12 pt-4 pt-lg-0 content" >
            <div className="row">
              <div className="col-lg-6">
                <h5>Frontend</h5>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>HTML, CSS, JAVASCRIPT</strong></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>REACTJS, NEXTJS</strong></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>REDUX, REDUX TOOLKIT, REDUX THUNK</strong></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>TAILWIND, ANT DESIGN</strong></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <h5>Backend</h5>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>NODEJS, EXPRESSJS</strong></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>MYSQL, MONGODB, MONGOOSE</strong></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>JWT</strong></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <h5>Orther</h5>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>GIT, FIGMA, POSTMAN</strong></li>
                </ul>
              </div>

            </div>
          </div>
        </div >

      </section >
    </div >
  )
}

export default Skill