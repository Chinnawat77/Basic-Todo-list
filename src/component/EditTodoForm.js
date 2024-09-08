import React, { useState } from 'react'

export const EditTodoForm = ({task, handleEditTask}) => {
    const [Value, setValue] = useState(task.task)
    const handleSubmit = (e) => {
        e.preventDefault()
        handleEditTask(Value, task.id);
        setValue("")
    }
  return (
    <div>
        <form className="Todo-Form" onSubmit={handleSubmit}>
            <input
            className='Todo-Input'
            type='text'
            value={Value}
            placeholder='Create a Newtodo in Today'
            onChange={(e) => setValue(e.target.value)}/>
          <button type="submit" className="Add-btn">Update</button>
        </form>
    </div>
  )
}
