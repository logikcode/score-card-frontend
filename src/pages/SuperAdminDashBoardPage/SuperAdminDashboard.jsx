import React from 'react'
import { Outlet } from 'react-router-dom';
import SuperAdminNavBar from '../../components/SuperAdmin/SuperAdminNavBar';
import SuperAdminSideBar from '../../components/SuperAdmin/SuperAdminSideBar';
import { BodySection } from './SuperAdminDashboardPageStyled';
function SuperAdminDashboardPage() {
  return (
    <>
    <BodySection>
    <SuperAdminSideBar />

      <div className="main-section">
        The main body
      </div>
    </BodySection>
    <Outlet/>
    </>
  )
}

export default SuperAdminDashboardPage;