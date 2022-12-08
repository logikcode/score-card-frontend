import React,{useEffect, useState} from 'react';
import PageTableHead from '../../PageTable/TableHead';
import { Table } from '../../PageTable/TableHeadStyled';
import { DashboardBodySection, DashboardBody } from '../../../pages/SuperAdminDashBoardPage/SuperAdminDashboardPageStyled';
import SuperAdminSideBar from '../SuperAdminSideBar';
import PageTableRow from '../../PageTable/PageTableRow';
import PageTableBody from '../../PageTable/PageTableBody';
import DateSelector from '../../Modal/DateSelector';
import { DateWrapper } from '../../Modal/DateSelectorStyled';
import { WeekReportWrapper } from './ViewWeeklyReportStyled';
import ReactPaginate from "react-paginate";
import EditDecadevDetails from '../../Modal/EditDecadevCard';
import ApiBaseUrl from '../../../common/ApiBaseUrl';
import { getTokenFromLocalStorage } from '../../../common/TokenService';
import { headerConfig } from '../../../common/AxiosHeaderConfig';

function ViewWeeklyPerformance(props) {

    // const data = [...Array(100).keys()];
    // state for decadev info editing

    const [showEdit, setShowEdit] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [totalDevs, setDevs] = useState([]);
    const [week, setWeek] = useState(1);

    const podId = 1;
    


    useEffect(()=>{
      //console.log(config.headers.Authorization);

      const response = ApiBaseUrl.get(`/admin/retrieve-weekly-scores/${podId}/${week}`,  headerConfig())
      .then((response) =>{
        console.log(response.data);
        setDevs(response.data)
      })

      },[week]);

    
    const [pageNumber, setPageNumber] = useState(0);
    const devsPerPage = 9;
    const devsShown = pageNumber * devsPerPage;
    const displayDevs = totalDevs.slice(devsShown, devsShown + devsPerPage);
    const count = Math.ceil(totalDevs.length / devsPerPage);
    
    


      
     
      const devs =  displayDevs.map( dev => {
       
        return (<PageTableRow key={dev.id} id={dev.id} devData={dev}  week={week} showEdit ={showEdit} showForm={showForm} />);

    });

    // for the pagination
    const loadNewContent = ({selected}) =>{
      setPageNumber(selected);

    }
    const changeWeek = (currentWeek)=>{
      setWeek(currentWeek)
    }

  return (

    <>
       <DashboardBodySection>
            <SuperAdminSideBar />
           
            <DashboardBody>
                <WeekReportWrapper>
                  <DateWrapper>
                      <div className='current-week'>Week {week}</div>
                      <DateSelector changeWeek={changeWeek} />
                      
                  </DateWrapper>
               
                  <Table> 
                      <PageTableHead />
                    
                      <PageTableBody>

                        {devs}

                      </PageTableBody>
                  
                      
                  </Table>

                  <hr/>
               
                  <ReactPaginate 
                  previousLabel={"<-Previous"}
                  nextLabel={"Next->"}
                  breakLabel="..."
                  pageCount={count}
                  onPageChange={loadNewContent}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"prevBtn"}
                  nextLinkClassName={"nextBtn"}
                  disabledClassName={"paginatedDisabled"}
                  activeClassName={"paginatedActive"}
                  />
                </WeekReportWrapper>
             
            </DashboardBody>

       </DashboardBodySection>

             

        
    </>
   
  )
}

export default ViewWeeklyPerformance