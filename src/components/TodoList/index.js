import React from "react";
import useTodos from "../../hooks/useTodos";
import AddToDoForm from "../AddToDoForm";
import Todo from "../Todo";

export default function TodoList() {
  const { todos, addNewTodo, removeTodo } = useTodos();

  return (
    <div className="border-solid border-2 py-2 px-4 rounded-lg mt-10">
      <h1 className="font-bold text-blue-600 text-2xl my-2 underline underline-offset-8">ToDo List</h1>
      {todos?.map((todo) => (
        <Todo todo={todo} removeTodo={removeTodo} />
      ))}
      <AddToDoForm addNewTodo={addNewTodo} />
    </div>
  );
}
