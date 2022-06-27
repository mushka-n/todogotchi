import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HOME_ROUTE } from "../../utils/consts";
import EditableTodo from "../EditableTodo/EditableTodo";
import Todo from "../Todo/Todo";

const TodoList = ({ todos }) => {
  const filteredTodos = todos.sort((todo) => (todo.completed ? 1 : -1));

  const location = useLocation();
  const isHome = location.pathname === HOME_ROUTE;

  return (
    <div className="w-auto">
      {isHome
        ? filteredTodos.map((todo) => <Todo key={todo.id} todo={todo} />)
        : todos.map((todo) => <EditableTodo key={todo.id} todo={todo} />)}

      <div className="w-2 h-2 bg-slate-600 border-2 border-slate-300"></div>
      <div className="w-2 h-2 bg-red-600 border-2 border-red-300"></div>
      <div className="w-2 h-2 bg-orange-600 border-2 border-orange-300"></div>
      <div className="w-2 h-2 bg-amber-600 border-2 border-amber-300"></div>
      <div className="w-2 h-2 bg-lime-600 border-2 border-lime-300"></div>
      <div className="w-2 h-2 bg-green-600 border-2 border-green-300"></div>
      <div className="w-2 h-2 bg-emerald-600 border-2 border-emerald-300"></div>
      <div className="w-2 h-2 bg-teal-600 border-2 border-teal-300"></div>
      <div className="w-2 h-2 bg-cyan-600 border-2 border-cyan-300"></div>
      <div className="w-2 h-2 bg-sky-600 border-2 border-sky-300"></div>
      <div className="w-2 h-2 bg-blue-600 border-2 border-blue-300"></div>
      <div className="w-2 h-2 bg-indigo-600 border-2 border-indigo-300"></div>
      <div className="w-2 h-2 bg-violet-600 border-2 border-violet-300"></div>
      <div className="w-2 h-2 bg-purple-600 border-2 border-purple-300"></div>
      <div className="w-2 h-2 bg-fuchsia-600 border-2 border-fuchsia-300"></div>
      <div className="w-2 h-2 bg-pink-600 border-2 border-pink-300"></div>
      <div className="w-2 h-2 bg-rose-600 border-2 border-rose-300"></div>
    </div>
  );
};

export default TodoList;
