import React, {useState} from 'react'
import { EditDetailWrapper, CardHeader, InputWrapper, SubmitButton } from './EditDecadevScoreStyled'
import ApiBaseUrl from '../../common/ApiBaseUrl';


function EditDecadevScore(props) {

const {showForm, toggleFormDisplay} = props;
const {algorithmScore, weeklyAssessment, qaTest, agileTest, week} = props.devData
const [algorithm, setAlgorithm] = useState(algorithmScore)
const [weeklyTask, setWeeklyTask] = useState(props.devData.weeklyTask)
const [agile, setAgile] = useState(agileTest);
const [assessment, setAssessment ] = useState(weeklyAssessment);

const scores = {
    "algorithmScore":algorithm,
    "weeklyAssessment": assessment, 
    "qaTest": "", 
    "agileTest":agile,
    "weeklyTask": weeklyTask, 
    "week":week
}
console.log(algorithm, weeklyTask, agile, assessment);

if(!showForm){
 return null;
}


  return (
    <EditDetailWrapper>
        <CardHeader>
            <h3 className="heading">Edit Scores</h3>
            <p className="close-card-btn" onClick={(e) => toggleFormDisplay()}>X</p>
        </CardHeader>
        
        <hr/>
    
        <form onSubmit={(e)=>props.handleScoreEdit(e, scores)} className='edit-score-form'>
            <InputWrapper>
                <label className='input-label'>Algorithms</label>
                <input type="number"  className='edit-input-field' value={algorithm} placeholder='Edit score' onChange={(e)=>{setAlgorithm(e.target.value)} } />
            </InputWrapper>

            <InputWrapper>
                <label className='input-label'>Weekly task</label>
                <input type="number"  className='edit-input-field' value={weeklyTask} placeholder='Edit score' onChange={(e)=>{setWeeklyTask(e.target.value)}}/>
            </InputWrapper>

            <InputWrapper>
                <label className='input-label'>Assessment Test</label>
                <input type="number"  className='edit-input-field' value={assessment} placeholder='Edit score' onChange={(e)=>{setAssessment(e.target.value)}}/>
            </InputWrapper>

            <InputWrapper>
                <label className='input-label'>Agile Test</label>
                <input type="number"  className='edit-input-field' value={agile}  placeholder='Edit score' onChange={(e)=>{setAgile(e.target.value)}}/>
            </InputWrapper>

            <InputWrapper>
                <label className='input-label'>Cummulative score</label>
                <input type="number"  className='edit-input-field edit-input-field-readonly' value={props.devData.cumulativeScore.toFixed(2)} placeholder='Edit score' readOnly/>
             </InputWrapper>
             <InputWrapper>
                <label className='input-label'>Overall rating</label>
                <input type="number"  className='edit-input-field edit-input-field-readonly' value={props.devData.cumulativeScore.toFixed(2)} placeholder='Edit score' readOnly/>
            </InputWrapper>

            <SubmitButton type="submit" className='update-score '>Update scores </SubmitButton>
        </form>
        
    </EditDetailWrapper>
  )
}

export default EditDecadevScore