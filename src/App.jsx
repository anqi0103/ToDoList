import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEM")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))
  }, [todos])

  // We need a way to update the state of todo
  function addTodo(title) {
    setTodos((currentTodo) => {
      return [
        ...currentTodo, 
        {id: crypto.randomUUID(), title, completed: false}
      ]
    })
  }

  // update the id of the todo, which is completed
  function toggleTodo(id, completed) {
    setTodos(currentTodo => {
      return currentTodo.map(todo => {
        if (todo.id === id) {
          // `todo.completed = completed` because the state is immutable, we could only create a brand new array
          return { ...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodo => {
      return currentTodo.filter(todo => todo.id !== id)
    })
  }

  return (<>
    <NewTodoForm onSubmit={addTodo}/>
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>) 

}
