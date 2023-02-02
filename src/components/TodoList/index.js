import React, { useState } from "react";
import useTodos from "../../hooks/useTodos";
import AddToDoForm from "../AddToDoForm";
import Todo from "../Todo";

export default function TodoList() {
  const [todos, addNewTodo, removeTodo, doneTodo] = useTodos();
  const [showInput, setShowInput] = useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <div className="border-solid border-2 bg-white w-96 py-2 px-4 rounded-lg mt-60 mb-96">
      <h1 className="font-bold text-black-600 text-lg my-2 border-b-2 mb-4 py-2">
        {completedTodos} / {todos.length} ToDo List completed
      </h1>
      {todos?.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          markAsDone={doneTodo}
        />
      ))}
      <div className="grid justify-items-end">
        <button
          className="my-2 font-bold "
          onClick={() => setShowInput((prev) => !prev)}
        >
          {showInput ? "- show less " : "+ Add a new item"}
        </button>
      </div>
      {showInput && <AddToDoForm addNewTodo={addNewTodo} />}
    </div>
  );
}
