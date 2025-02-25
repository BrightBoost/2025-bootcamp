import { useState } from "react";

function ToDoList({todos}) {
    

    return (
        <ul>
            {todos.map(todo => {
                return <li key={todo.id}>{todo.title} - {todo.description}</li>
            })}
        </ul>
    )
}

export default ToDoList;