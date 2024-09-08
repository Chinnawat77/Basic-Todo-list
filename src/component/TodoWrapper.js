import React, { useState, useEffect } from 'react'
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import { v4 as uuidv4 } from 'uuid';
import { EditTodoForm } from './EditTodoForm';

export const TodoWrapper = () => {
    const [Todos, setTodos] = useState(() => {
      const saveList = localStorage.getItem("Todos")
      if(saveList)
      {
        return JSON.parse(saveList);
      }else{
        return [];
      }
    })
    const addTodo = (todo) => {
        setTodos([...Todos,
            {id: uuidv4(),
             task: todo,
             complete: false,
             isediting: false
            }
        ])
        console.log(Todos)
    }
useEffect(() => {
  localStorage.setItem("Todos",JSON.stringify(Todos))
}, [Todos])


    const deleteTodo = id => {
      setTodos(Todos.filter(todo => todo.id !== id))
    }


    const handleEdit = id => {
      setTodos(Todos.map(todo => todo.id === id ? {...todo, isediting: !todo.isediting} : todo))
    }

    const handleEditTask = (task, id) => {
      setTodos(Todos.map(todo => todo.id === id ? {...todo, task, isediting: !todo.isediting} : todo))
    }
  return (
    
    <div className='Todo-Wrapper'>
      <h1>Todolist</h1>
        <TodoForm addTodo={addTodo}/>
       {Todos.map((todo, index ) => (
        todo.isediting ? (
          <EditTodoForm task={todo}  handleEditTask={handleEditTask}/>
        ) :
        <Todo task={todo} key={index} deleteTodo={deleteTodo} handleEdit={handleEdit}/>
       ))}
    </div>
  )
}
