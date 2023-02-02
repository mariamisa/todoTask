import { useState, useEffect } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    // to replace with api request
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: Date.now(), // this is not idle but the id should be unique from db
        text: todo,
      },
    ]);
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  return { todos, addNewTodo, removeTodo };
};

export default TodoList;
