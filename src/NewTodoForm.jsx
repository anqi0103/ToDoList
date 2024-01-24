import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("")
    

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return 
    
        // Whenever we want to modify existing data, appending new element at the end of array instead of creating new
        // array when we re-render the component, we need to pass a function to the setState, which will return the 
        // currentValue you want the new state to be 

        // setTodos((currentTodo) => {
        //   return [
        //     ...currentTodo, 
        //     {id: crypto.randomUUID(), title: newItem, completed: false}
        //   ]
        // })

        // Instead use setTodos to update the state of todo
        // We could call addTodo function here using props
        // props.onSubmit(newItem)
        // OR we could use onSubmit directly by passing it 
        // into function as an argument
        onSubmit(newItem)
        setNewItem("")
    }

    return <form onSubmit={handleSubmit} className="new-item-form">
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
}