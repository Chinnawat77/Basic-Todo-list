import React, { useState } from 'react'

export const EditTodoForm = ({task, handleEditTask}) => {
    const [Value, setValue] = useState(task.task)
    const handleSubmit = (e) => {
      if(Value !== ""){ 
        e.preventDefault()
        handleEditTask(Value, task.id);
        setValue("")
      }else{
        alert("Please edit your entry")
        setValue(Value)
      }
    }
    
  return (
    <div>
        <form className="Todo-Form" onSubmit={handleSubmit}>
            <input
            className='Todo-Edit-Input'
            type='text'
            value={Value}
            placeholder='You are editing'
            onChange={(e) => setValue(e.target.value)}/>
          <button type="submit" className="Add-btn">Update</button>
        </form>
    </div>
  )
}
