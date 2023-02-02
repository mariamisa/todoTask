import React from "react";
import useTodos from "../../hooks/useTodos";
import AddToDoForm from "../AddToDoForm";

export default function TodoList() {
  const { todos, addNewTodo, removeTodo } = useTodos();

  return (
    <div>
      {todos?.map((todo) => (
        <>
          <p>{todo?.text}</p>
          <button onClick={() => removeTodo(todo.id)}>delete</button>
        </>
      ))}
      <AddToDoForm addNewTodo={addNewTodo} />
    </div>
  );
}
