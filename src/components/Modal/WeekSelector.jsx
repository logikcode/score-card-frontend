import React from 'react'
import { Select } from './WeekSelectorStyled'

const WeekSelector = (props) => {
  const {open, changeWeek} = props;
  if(!open){
    return null;
  }

  const onWeekSelect =(e)=>{
    console.log(e.target.value);
    changeWeek(e.target.value);
  }

  return (
    <Select onChange={(e)=> {onWeekSelect(e)}}>
        <option className='week'  value={1}>Week 1</option>
        <option className='week' value={2}>Week 2</option>
        <option className='week' value={3}> Week 3</option>
        <option className='week' value={4}> Week 4</option>
        <option className='week' value={5}>Week 5</option>
        <option className='week' value={6}>Week 6</option>
        <option className='week' value={7}>Week 7</option>
        <option className='week' value={8}>Week 8</option>
        <option className='week' value={9}>Week 9</option>
        <option className='week' value={10}>Week 10</option>
        <option className='week' value={11}>Week 11</option>
        <option className='week' value={12}>Week 12</option>
        <option className='week' value={13}>Week 13</option>
        <option className='week' value={14}>Week 14</option>
        <option className='week' value={15}>Week 15</option>
        <option className='week' value={16}>Week 16</option>
    </Select>
  )
}

export default WeekSelector