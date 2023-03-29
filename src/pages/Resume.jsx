import React from 'react'

const Resume = () => {
  return (
    <div> <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6" >
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>FPT POLYTECHNIC</h4>
              <h5>9/2021 - Present</h5>
              {/* <p><em>Rochester Institute of Technology, Rochester, NY</em></p> */}
              <p>Major: Web Development</p>
              <p>Final year student working on a graduation project.</p>

            </div>
          </div>
        </div>

      </div>
    </section></div>
  )
}

export default Resume