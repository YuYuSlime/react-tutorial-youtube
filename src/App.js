import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4} from "uuid";

function App() {
  const todoNameRef = useRef()
  const  handleAddTodo = (e) => {
    //タスクを追加
    if (todoNameRef.current.value === "") return;
      setTodos((prevTodos) => {
      return [...prevTodos, {id:uuidv4(), name: todoNameRef.current.value, completed: false}];
    });
  }
  const [todos, setTodos] = useState([]);


  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos)
  }
  return (
  
    

    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}
        
      </div>
    </div>
  );
}

export default App;
