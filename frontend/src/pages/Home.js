import React, { useContext } from "react";
import { Context } from "..";
import Pet from "../components/Pet/Pet";
import StatusBars from "../components/Pet/StatusBars";
import TodoList from "../components/TodoList/TodoList";

const Home = () => {
  const { todos, pet } = useContext(Context);

  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <Pet
            health={pet.petStatus.health}
            hunger={pet.petStatus.hunger}
            happiness={pet.petStatus.happiness}
          />
          <StatusBars />
        </div>
        <TodoList todos={todos.todos} />
      </div>
    </>
  );
};

export default Home;
