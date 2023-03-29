import React from 'react'

const About = () => {
  return (
    <div>        <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p style={{ "fontSize": "24px", "fontWeight": "500" }}>Career goals</p>
          <p>Become a professional Developer specialized in web development. Improve skills by accumulating more knowledge
via high-valued online courses. Aiming to be a Senior Fullstack Developer in the next 5 years.</p>

        </div>

        <div className="row">
          <div className="col-lg-4" >
            <img src={'https://res.cloudinary.com/vannam042/image/upload/v1649580351/z3330081096623_8be91a1ad0d803e7fa8056c4cf3b81f0_v15v8o.jpg'} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" >
            <h3>Web Developer</h3>
            <p className="fst-italic">
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. */}
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>04/02/2002</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>0376021530</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>nvnam042@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Facebook:</strong> <span>https://www.facebook.com/nam.nvan02</span></li>

                </ul>
              </div>
              <div className="col-lg-6">
              </div>
            </div>
            {/* <p>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
          </p> */}
          </div>
        </div>

      </div>
    </section></div>
  )
}

export default About