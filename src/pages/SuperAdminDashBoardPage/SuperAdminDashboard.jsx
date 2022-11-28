import React from 'react'
import { Outlet } from 'react-router-dom';
import SuperAdminNavBar from '../../components/SuperAdmin/SuperAdminNavBar';
import SuperAdminSideBar from '../../components/SuperAdmin/SuperAdminSideBar';
import { DashboardBodySection } from './SuperAdminDashboardPageStyled';
function SuperAdminDashboardPage() {
  return (
    <>
    <DashboardBodySection>
    <SuperAdminSideBar />

      <div className="main-section">
        The main body
      </div>
    </DashboardBodySection>
    <Outlet/>
    </>
  )
}

export default SuperAdminDashboardPage;