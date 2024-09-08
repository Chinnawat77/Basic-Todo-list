import React from 'react'
import { BiCalendarEdit } from "react-icons/bi";
import { CiCircleRemove } from "react-icons/ci";

export const Todo = ({task, Index, deleteTodo, handleEdit}) => {
    console.log(task.task)
    console.log(Index)

    
  return (
    <div className='Todo'>
        <p className='Text'>{task.task}</p>
        <BiCalendarEdit className='edit-btn' onClick={() => handleEdit(task.id)}/>
        <CiCircleRemove className='remove-btn' onClick={() => deleteTodo(task.id)}/>
        
    </div>
  )
} 
