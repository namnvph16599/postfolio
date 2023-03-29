import React from 'react'

const Header = () => {
    return (
        <div> <header id="header">
            <div className="d-flex flex-column">

                <div className="profile">
                    <img src='https://res.cloudinary.com/vannam042/image/upload/v1649580351/z3330081096623_8be91a1ad0d803e7fa8056c4cf3b81f0_v15v8o.jpg' alt="" className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">Ngô Văn Nam</a></h1>
                    <div className="social-links mt-3 text-center">
                        <a target="_blank" href='nvnam042@gmail/com' className="twitter"><i className="bi bi-envelope"></i></a>
                        <a target="_blank" href='https://www.facebook.com/nam.nvan02' className="facebook"><i className="bx bxl-facebook"></i></a>
                    </div>
                </div>

                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li><a onClick={() => { handlerActive() }} href="#hero" className="nav-link scrollto"><i className="bx bx-home"></i> <span>Home</span></a></li>
                        <li><a onClick={() => { handlerActive() }} href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                        <li><a onClick={() => { handlerActive() }} href="#skills" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Skills</span></a></li>
                        <li><a onClick={() => { handlerActive() }} href="#softskill" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Soft Skill</span></a></li>
                        <li><a onClick={() => { handlerActive() }} href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                        <li><a onClick={() => { handlerActive() }} href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Project</span></a></li>
                        <li><a onClick={() => { handlerActive() }} href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                    </ul>
                </nav>
            </div>
        </header></div>
    )
}

export default Header