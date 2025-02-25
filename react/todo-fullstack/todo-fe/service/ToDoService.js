const URL = "http://localhost:8080/api/todos";

export function getTodos() {
    return fetch(URL)
      .then(response => response.json())
}

export function addTodo(todo) {
    return fetch(URL, {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {'Content-Type': 'application/json'}
    })
      .then(response => response.json())
}