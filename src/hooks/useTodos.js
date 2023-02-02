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
        completed: false,
      },
    ]);
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const doneTodo = (id) => {
    const updateToDone = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
      return todo;
    });
    setTodos(updateToDone);
  };

  return { todos, addNewTodo, removeTodo, doneTodo };
};

export default TodoList;
