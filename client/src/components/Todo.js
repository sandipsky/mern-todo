import React from 'react'
import './todo.css'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import axios from 'axios'


const Todo = ({todo, setTodos, todos}) => {

  const deleteTask = async (id) => {
   await axios.delete(`http://localhost:8000/todos/delete/${id}`)
    .then((res) => res.json() );
    setTodos(todos.filter((todo) => {return todo.id !== id}));
  }

  const completeTodo = (id, title, complete) => {
    axios.put(`http://localhost:8000/todos/update/${id}`, {title: title, complete: !complete})
    .then((res) => res.json() );
  }

  return (
    <div className='todos'>
         <div className="todo complete">
         <div onClick={() => completeTodo(todo._id)} className="text">{todo.title}</div>
         <div onClick={() => deleteTask(todo._id, todo.title, todo.complete)} className="deletetodo">
         {/* <div className="deletetodo"> */}
         <DeleteRoundedIcon />
         </div>
     </div>
       
    </div>
  )
}

export default Todo