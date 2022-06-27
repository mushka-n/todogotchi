import Checkbox from "../Checkbox/Checkbox";
import { useContext, useState } from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

const tailwindColors = [
  "slate",
  "red",
  "orange",
  "amber",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

const Todo = ({ todo }) => {
  const { todos } = useContext(Context);

  const color = tailwindColors[todo.color];
  const bg = `bg-${color}-600`;
  const border = `border-[6px] border-${color}-300`;
  const opacity = todo.completed ? "opacity-20" : "opacity-100";
  const deadline = new Date(todo.deadline);

  const toggleTodo = (id) => {
    const newTodo = [...todos.todos];
    for (let i = 0; i < newTodo.length; i++) {
      if (id === newTodo[i].id) {
        newTodo[i].completed = !newTodo[i].completed;
        todos.setTodos(newTodo);
      }
    }
  };

  return (
    <div
      className={`w-auto m-[10px] inline-block p-5 ${bg} ${border} ${opacity} h-auto text-white rounded-3xl`}
    >
      <div className="flex gap-2 items-center justify-center ">
        <div
          className="flex items-center justify-center h-full"
          onClick={() => toggleTodo(todo.id)}
        >
          <Checkbox color={color} checked={todo.completed} />
        </div>
        <div className="h-12 ml-4 flex items-center justify-center flex-col">
          <div className="w-auto todo-text">{todo.title}</div>
          {todo.deadline && (
            <div>{`${deadline.getHours()} : ${deadline.getMinutes()}`}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default observer(Todo);
