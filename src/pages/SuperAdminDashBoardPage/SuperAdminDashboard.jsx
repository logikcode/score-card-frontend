import React from 'react'
import { Outlet } from 'react-router-dom';
import SuperAdminNavBar from '../../components/SuperAdmin/SuperAdminNavBar';
import SuperAdminSideBar from '../../components/SuperAdmin/SuperAdminSideBar';
import { DashboardBodySection, DashboardBody } from './SuperAdminDashboardPageStyled';
function SuperAdminDashboardPage() {
  return (
    <>
    <DashboardBodySection>
    <SuperAdminSideBar />

      <DashboardBody>
      
      </DashboardBody>
      
    </DashboardBodySection>
    <Outlet/>
    </>
  )
}

export default SuperAdminDashboardPage;