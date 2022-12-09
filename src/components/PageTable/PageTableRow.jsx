import React,{useState} from "react";
import { RowTableHead } from "./TableHeadStyled";
import { TableRow, TableData } from "./PageTableRowStyled";
import optionIcon from "../../Assets/Images/options-icon.svg";
import EditDecadevDetails from "../Modal/EditDecadevCard";
import ApiBaseUrl from "../../common/ApiBaseUrl";
import { headerConfig } from "../../common/AxiosHeaderConfig";
import { fetchDevScore } from "../../common/FetchDecadevScore";

const parseScore = (score) =>{
  if(score != null && score != undefined && score != ""){
    return score;
  }
  return "-"
}

function PageTableRow(props) {

  const config = headerConfig(); 

  const {id, email, firstName, lastName, algorithmScore, weeklyAssessment,qaTest,agileTest,weeklyTask,cumulativeScore} = props.devData
  const week = props.week;

  const [showEdit, setShowEdit] = useState(false);
  const [showForm, setShowForm] = useState(false);
 

  const firstLetter = firstName.substring(0,1);
  const secondLetter = lastName.substring(0, 1);  

  const showEditCard = ()=>{
   
    setShowEdit(!showEdit);
    
  }

  const toggleFormDisplay = () => {
    setShowForm(!showForm);
  }

  
  return (
    <>
      <TableRow>
        <div className="data">
          <span className="name-abbreviation">{firstLetter}{secondLetter}</span>
          <td>{firstName} {lastName}</td>
        </div>
        
          <TableData>{parseScore(algorithmScore)}</TableData>
          <TableData>{parseScore(weeklyTask)}</TableData>
          <TableData>{parseScore(weeklyAssessment)}</TableData>
          <TableData>{parseScore(agileTest)}</TableData>
          <TableData>{parseScore(cumulativeScore)}</TableData>
          <TableData className="overall-rating">{parseScore(cumulativeScore)}</TableData>
        
          <div>
             <img className="row-icon" src={optionIcon} onClick={()=> showEditCard()}/>
            <EditDecadevDetails show={showEdit}  showForm={showForm} toggleFormDisplay={toggleFormDisplay} devData={props.devData} fetchDevScore={fetchDevScore} week={week} id={id}/> 
            
          </div>
         
          
          
      </TableRow>


    </>
  );
}

export default PageTableRow;
