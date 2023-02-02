import React from "react";

export default function Todo({ todo, removeTodo }) {
  return (
    <div className="grid grid-cols-3 gap-4 border-b-2 py-2 border-zinc-100	">
      <p className="col-span-2 font-bold">{todo?.text}</p>
      <button
        className="bg-red-500 text-white w-12 rounded-lg"
        onClick={() => removeTodo(todo.id)}
      >
        X
      </button>
    </div>
  );
}
