import React,  {useState} from 'react'
import dateIcon from "../../Assets/Images/icon-date.svg"
import { Date } from './DateSelectorStyled';
import WeekSelector from './WeekSelector';

const DateSelector = (props) => {

  const [openWeekOption, setWeekOption] = useState(false);
  return (

    <div>

        <Date onClick={()=> setWeekOption(!openWeekOption)}>
            <img src={dateIcon} alt="" className="date-icon" /> 
            <span className='weeks'>Weeks</span>
        </Date>
        <WeekSelector open = {openWeekOption} changeWeek={props.changeWeek}/>
    </div>
  )
}

export default DateSelector