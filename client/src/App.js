import { useEffect, useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(
    () => {
      axios.get("http://localhost:8000/todos")
      .then((res) => setTodos(res.data) )
    }, []);

  const addTask = (e) => {
    //e.preventDefault();
    if(newTodo!=="")
    {
      axios.post("http://localhost:8000/todos/new", {title: newTodo})
      .then((res) => res.json()  )
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  }

  
  return (
    <div className="App">
      <h1>Welcome, Sandip</h1>
    
      <input type="text" className='todoinput' onChange={e =>  setNewTodo(e.target.value)} value={newTodo} placeholder='Write Something' />
      <button onClick={addTask} className='addbtn'>Add Task</button>
  
      <h4>Your Tasks</h4>
      {todos.map(todo => (
      <Todo todo={todo} />
      ))}
    </div>
  );
}

export default App;
