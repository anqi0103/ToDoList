import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    
    return (
        <ul className="list">
            {todos.length === 0 && "Adding Something on your todo list!!!"}
            {/* Using {} inside of HTML means that it is JavaScript code */}
            {todos.map(todo => {
                return (
                    <TodoItem 
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
    )
}