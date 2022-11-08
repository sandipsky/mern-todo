import React from 'react'
import './todo.css'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import axios from 'axios'


const Todo = ({todo, setTodos, todos}) => {

  const deleteTask = (id) => {
   axios.delete(`http://localhost:8000/todos/delete/${id}`)
    .then((res) => res.json() );
    // setTodos(todos.filter((todo) => {return todo.id !== id}));
  }

  const completeTodo = (id) => {
    axios.get(`http://localhost:8000/todos/complete/${id}`)
    .then((res) => res.json() );
    // setTodos(todos => todos.map(todo => {
		// 	if (todo._id === id) {
		// 		todo.complete = !todo.complete;
		// 	}

		// 	return todo;
		// }));
  }

  return (
    <div className='todos'>
         <div className={(todo.complete ? "todo complete" : "todo")} >
         <div onClick={() => completeTodo(todo._id)} className="text" >{todo.title}</div>
         <div onClick={() => deleteTask(todo._id, todo.title, todo.complete)} className="deletetodo">
         {/* <div className="deletetodo"> */}
         <DeleteRoundedIcon />
         </div>
         
     </div>
       
    </div>
  )
}

export default Todo