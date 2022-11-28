import React from 'react';
import PageTableHead from '../../PageTable/TableHead';
import { Table } from '../../PageTable/TableHeadStyled';
import { DashboardBodySection, DashboardBody } from '../../../pages/SuperAdminDashBoardPage/SuperAdminDashboardPageStyled';
import SuperAdminSideBar from '../SuperAdminSideBar';
function ViewWeeklyPerformance() {

  return (
    <>
       <DashboardBodySection>
            <SuperAdminSideBar />

            <DashboardBody>
                 <Table> 
                     <PageTableHead></PageTableHead>
                </Table>
            </DashboardBody>

       </DashboardBodySection>

           

        
    </>
   
  )
}

export default ViewWeeklyPerformance