# Fullstack ToDo App Exercise

After this exercise, you can call yourself fullstack developer! You will create a fullstack application consisting of a **Spring Boot** backend and a **React** frontend. The backend will provide a REST API for managing ToDo items, while the frontend will allow users to perform CRUD (Create, Read, Update, Delete) operations on these items.

## Requirements
- Backend: Spring Boot application with a MySQL database to store ToDo items and a REST controller for CRUD operations.
- Frontend: React app created with Vite, including components to display and manage the ToDo list.

---

## **Backend: Spring Boot API**
### **1. Set Up the Spring Boot Project**
- Create a new Spring Boot application.
- Add dependencies for **Spring Web**, **Spring Data JPA**, and **MySQL Driver**.

### **2. Configure Database**
- Set up a MySQL database named `mytodos`.
- Configure `application.properties` with database connection details.

### **3. Create ToDo Entity**
- Define a `ToDo` class with attributes like `id`, `title`, `description`, and `completed`.
- Annotate it as an `@Entity`.

### **4. Create Repository**
- Implement a JPA repository interface for the `ToDo` entity.

### **5. Implement Service Layer**
- Create a service class to handle business logic and interact with the repository.

### **6. Create REST Controller**
- Implement a `ToDoController` with CRUD endpoints:
  - `GET /todos` - Retrieve all ToDo items
  - `GET /todos/{id}` - Retrieve a specific ToDo item
  - `POST /todos` - Create a new ToDo item
  - `PUT /todos/{id}` - Update an existing ToDo item
  - `DELETE /todos/{id}` - Delete a ToDo item
- Use `@RestController` and `@RequestMapping`.

### **7. Test the API**
- Use **Postman** to test the CRUD endpoints.

---

## **Frontend: React App with Vite**
### **1. Set Up React Project**
- Create a new React app using Vite:  
  ```sh
  npm create vite@latest my-todo-app --template react
  cd my-todo-app
  npm install
  ```

### **2. Components**
- **`App` Component:** The main component managing state and rendering other components.
- **`ToDoList` Component:** Displays the list of ToDos.
- **`AddToDo` Component:** Provides a form for adding new ToDos.

### **3. Fetch and Display Data**
- Use `useEffect` to fetch the ToDo list from the backend on page load.
- Render the list of ToDos in the `ToDoList` component.

### **4. Implement Add ToDo Feature**
- Create a form in `AddToDo` to submit new ToDo items.
- Upon submit, send a `POST` request to the backend.
- Refresh the ToDo list after adding a new item.

### **5. BONUS: Implement Update and Delete Features**
- Add an edit button next to each ToDo item to allow updates.
- Add a delete button to remove ToDo items.
- Send `PUT` and `DELETE` requests to the backend accordingly.

### **6. Style the Application**
- Use basic CSS or a UI library like Tailwind or Bootstrap.

### **7. Test the Application**
- Verify CRUD operations work by interacting with the frontend.
- Check that updates reflect in the database.

---

## **Bonus Challenges**
- Implement error handling for API calls.
- Be able to mark items as complete (show difference with CSS)
- Be able to delete items

Congratulations, you are now a fullstack developer 💖

