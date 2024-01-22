import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    // Whenever we want to modify existing data, appending new element at the end of array instead of creating new
    // array when we re-render the component, we need to pass a function to the setState, which will return the 
    // currentValue you want the new state to be    
    setTodos((currentTodo) => {
      return [
        ...currentTodo, 
        {id: crypto.randomUUID(), title: newItem, completed: false}
      ]
    })
    setNewItem("")
  }

  return <>
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input 
          value={newItem} 
          onChange={e => setNewItem(e.target.value)} 
          type="text" 
          id="item" 
        />
      </div>
      <button className="btn">Add</button>
    </form>
    <h1 className="header">Todo List</h1>
    <ul className="list">
      {/* Using {} inside of HTML means that it is JavaScript code */}
      {todos.map(todo => {
        return <li key={todo.id}>
          <label>
            <input type="checkbox" defaultChecked={todo.completed}/>
            {todo.title}
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      })}
      
    </ul>
  </> 

}
