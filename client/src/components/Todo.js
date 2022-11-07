import React from 'react'
import './todo.css'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import axios from 'axios'


const Todo = ({todo}) => {

  const deleteTask = (id) => {
    axios.delete(`http://localhost:8000/todos/delete/${id}`)
    .then((res) => res.json() )
  }

  return (
    <div className='todos'>
         <div className="todo complete">
         <div className="text">{todo.title}</div>
         <div onClick={deleteTask(todo._id)} className="deletetodo">
         <DeleteRoundedIcon />
         </div>
     </div>
       
    </div>
  )
}

export default Todo