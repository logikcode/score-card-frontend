import React from 'react';
import PageTableHead from '../../PageTable/TableHead';
import { Table } from '../../PageTable/TableHeadStyled';
import { DashboardBodySection, DashboardBody } from '../../../pages/SuperAdminDashBoardPage/SuperAdminDashboardPageStyled';
import SuperAdminSideBar from '../SuperAdminSideBar';
import PageTableRow from '../../PageTable/PageTableRow';
import PageTableBody from '../../PageTable/PageTableBody';

function ViewWeeklyPerformance(props) {


    const data = [...Array(9).keys()];
      const mappedData =  data.map( num => {
            // console.log(element);
        return (<PageTableRow key={num} score={num}/>);

    });

  return (

    <>
       <DashboardBodySection>
            <SuperAdminSideBar />

            <DashboardBody>
                 <Table> 
                     <PageTableHead></PageTableHead>

                     <PageTableBody>

                    {mappedData}

                     </PageTableBody>
                   
                </Table>
            </DashboardBody>

       </DashboardBodySection>

           

        
    </>
   
  )
}

export default ViewWeeklyPerformance