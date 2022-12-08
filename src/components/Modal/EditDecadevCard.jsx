import React, { useEffect, useState } from 'react'
import { EditDetailDiv } from './EditDecadevCardStyled';
import EditDecadevScore from './EditDecadevScore';
import ApiBaseUrl from '../../common/ApiBaseUrl';
import { headerConfig } from '../../common/AxiosHeaderConfig';

function EditDecadevDetails(props) {

  const config = headerConfig();

  const {show, showForm, toggleFormDisplay, id, fetchDevScore, setScoreData, week} = props;
  console.log(id)
  console.log(week)
  if(!show){

    return null;
  }

  const handleScoreEdit = async (event, data) =>{

    console.log(data)
    
    //console.log(id);
    const response = await ApiBaseUrl.put(`/admin/update-score/${id}/weekly-score/${week}`, data, config)
 
    .then((response)=>{
      
      //fetchDevScore(1,5);
      
      //setScoreData(response.data.data);
    } )
    
    console.log("Edit handler called")
  }
  const handleDelete = ()=>{
   
      const response = ApiBaseUrl.delete(`/admin/delete-weekly-score/${id}/${week}`, config)
    .then(()=>{
      console.log("Successfully Deleted");
      window.location.reload(true);
    })
  }

    
  return (
    <>
    <EditDetailDiv>
        <p className="edit-score" onClick={()=> props.toggleFormDisplay() }>Edit scores</p>
        <div className="delete-dev" onClick={(e)=>{handleDelete(e)}}>Delete</div>
    </EditDetailDiv>

    <EditDecadevScore showForm={showForm} toggleFormDisplay={toggleFormDisplay} handleScoreEdit={handleScoreEdit} devData={props.devData}/>

    </>
  )
}

export default EditDecadevDetails