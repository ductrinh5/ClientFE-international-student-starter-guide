import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import DashboardMain from '../Components/Dashboard/DashboardMain'

function Dashboard() {
  return (
    <div>
      <HeaderOne />
      <Breadcrumb
        title="My Dashboard"
      />
      <DashboardMain />
      <FooterFour />
      <ScrollToTop />
    </div>
  )
}

export default Dashboard