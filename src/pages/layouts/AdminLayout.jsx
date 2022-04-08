import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const AdminLayout = ({info}) => {
  return (
    <div>
      <nav>
        <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
        <Header info={info} />
        <Footer />
      </nav>
      <main style={{ marginLeft: 300 + 'px' }}>
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout