import React from "react";

export default function Todo({ todo, removeTodo, markAsDone }) {
  return (
    <div className="grid grid-cols-3 gap-4 bg-stone-100 rounded-lg my-2 py-4 border-zinc-100	">
      <p className="col-span-2 font-bold indent-4">
        <input
          defaultChecked={todo.completed}
          onChange={() => markAsDone(todo.id)}
          className=" m-2 border-zinc-100"
          type="checkbox"
        />
        {todo?.text}
      </p>
      <button
        className="bg-red-500 text-white w-12 rounded-lg"
        onClick={() => removeTodo(todo.id)}
      >
        X
      </button>
    </div>
  );
}
