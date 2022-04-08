import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div><section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Project</h2>
          {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
        </div>

        <div className="row">
          <div className="col-lg-12">
            <ul>
              <li><strong>Birthday:</strong> <span>birthday</span></li>
              <li><a href="facebook.com" target="_blank">Facebook</a></li>

            </ul>
          </div>
        </div>

      </div>
    </section></div>
  )
}

export default Portfolio