import { useState } from "react"
import { addTodo } from "../service/ToDoService";

function AddToDo({ handleTodoAdded }) {
    const [todoFormData, setTodoFormData] = useState({ title: "", description: "" });
    function handleChangeTodo(e) {
        const { name, value } = e.target;
        setTodoFormData({
            ...todoFormData,
            [name]: value
        });
    }

    function handleSubmitTodo() {
        addTodo(todoFormData).then(
            data => {
                console.log(data);
                handleTodoAdded();
            }

        );

    }
    return (
        <>
            <input type="text" name="title" value={todoFormData.title} onChange={handleChangeTodo}></input>
            <input type="text" name="description" value={todoFormData.description} onChange={handleChangeTodo}></input>
            <button type="submit" onClick={handleSubmitTodo}>Add</button>
        </>
    )
}

export default AddToDo