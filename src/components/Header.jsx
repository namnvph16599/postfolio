import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ info }) => {
    return (
        <div> <header id="header">
            <div className="d-flex flex-column">

                <div className="profile">
                    <img src={info?.avatar} alt="" className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">{info?.name}</a></h1>
                    <div className="social-links mt-3 text-center">
                        <a href={info?.email} className="twitter"><i className="bi bi-envelope"></i></a>
                        <a href={info?.github} className="google-plus"><i className="bx bxl-github"></i></a>
                        <a href={info?.facebook} className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href={info?.instagram} className="instagram"><i className="bx bxl-instagram"></i></a>
                    </div>
                </div>

                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                        <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                        <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                        <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                        <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
                        <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                    </ul>
                </nav>
            </div>
        </header></div>
    )
}

export default Header