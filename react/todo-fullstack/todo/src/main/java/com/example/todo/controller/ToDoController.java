package com.example.todo.controller;

import com.example.todo.model.ToDo;
import com.example.todo.service.ToDoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("api/todos")
public class ToDoController {
    private ToDoService toDoService;

    public ToDoController(ToDoService toDoService) {
        this.toDoService = toDoService;
    }

    @GetMapping
    public List<ToDo> getAllToDos() {
        return toDoService.getAllToDos();
    }

    @GetMapping("/{id}")
    public ToDo getTodoById(@PathVariable long id) {
        return toDoService.getToDoById(id);
    }

    @PostMapping
    public ToDo createTodo(@RequestBody ToDo todo) {
        return toDoService.createToDo(todo);
    }

    @PutMapping("/{id}")
    public ToDo updateTodo(@PathVariable long id, @RequestBody ToDo toDo) {
        return toDoService.updateToDo(id, toDo);
    }

    @DeleteMapping("/{id}")
    public void deleteTodoById(@PathVariable long id) {
        toDoService.deleteToDo(id);
    }

}
