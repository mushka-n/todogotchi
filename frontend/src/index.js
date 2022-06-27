import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserStore from "./store/UserStore";
import "./index.css";

import { createRoot } from "react-dom/client";
import PetStore from "./store/PetStore";
import TodoStore from "./store/TodoStore";

export const Context = createContext(null);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      pet: new PetStore(),
      todos: new TodoStore(),
    }}
  >
    <App />
  </Context.Provider>
);
