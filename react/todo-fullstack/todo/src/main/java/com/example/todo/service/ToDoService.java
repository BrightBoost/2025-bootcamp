package com.example.todo.service;

import com.example.todo.model.ToDo;
import com.example.todo.repository.ToDoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToDoService {

    private ToDoRepository toDoRepository;

    public ToDoService(ToDoRepository toDoRepository) {
        this.toDoRepository = toDoRepository;
    }

    // get all
    public List<ToDo> getAllToDos() {
        return toDoRepository.findAll();
    }

    // get by id
    public ToDo getToDoById(long id) {
        return toDoRepository.findById(id).orElse(null);
    }
    // add to do
    public ToDo createToDo(ToDo toDo) {
        return toDoRepository.save(toDo);
    }

    // update to do
    public ToDo updateToDo(long id, ToDo todo) {
        ToDo toBeUpDatedToDo = toDoRepository.findById(id).orElse(null);
        if(toBeUpDatedToDo != null) {
            toBeUpDatedToDo.setTitle(todo.getTitle());
            toBeUpDatedToDo.setDescription(todo.getDescription());
            toBeUpDatedToDo.setCompleted(todo.isCompleted());
        } else {
            throw new RuntimeException("Can't find to do!");
        }
        return toDoRepository.save(todo);

    }


    // delete to do
    public void deleteToDo(long id) {
        toDoRepository.deleteById(id);
    }


}
