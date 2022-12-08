import React from 'react'
import { Outlet } from 'react-router-dom';
import SuperAdminNavBar from '../../components/SuperAdmin/SuperAdminNavBar';
import SuperAdminSideBar from '../../components/SuperAdmin/SuperAdminSideBar';
import { DashboardBodySection, DashboardBody } from './SuperAdminDashboardPageStyled';
import WeekSelector from '../../components/Modal/WeekSelector';
function SuperAdminDashboardPage() {
  return (
    <>
    <DashboardBodySection>
    <SuperAdminSideBar />

      <DashboardBody>
      <WeekSelector/>
      </DashboardBody>
      
    </DashboardBodySection>
    <Outlet/>
    </>
  )
}

export default SuperAdminDashboardPage;