import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const [Value, setValue] = useState("")
    const handleSubmit = (e) => {
      if(Value !== ""){
        e.preventDefault()
        addTodo(Value);
        setValue("")
      }
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
          <button type="submit" className="Add-btn" disabled={Value.trim() === ''}>AddTask</button>
        </form>
    </div>
  )
}
