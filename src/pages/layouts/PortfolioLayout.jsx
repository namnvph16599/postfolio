import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


const PortfolioLayout = () => {
    return (
        <div>
            <nav>
                <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
                <Header />
                <Footer />
            </nav>
            <main style={{ marginLeft: 300 + 'px' }}>
                <Outlet />
            </main>
        </div>
    )
}

export default PortfolioLayout