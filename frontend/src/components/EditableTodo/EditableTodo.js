import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Context } from "../..";
import { Modal, Header, Input, Footer } from "../Modal/Modal";

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

const EditableTodo = ({ todo }) => {
  const { todos } = useContext(Context);

  const [show, setShow] = useState(false);
  const onHide = () => {
    setShow(false);
  };

  const [title, setTitle] = useState(todo.title);

  const color = tailwindColors[todo.color];
  const bg = `bg-${color}-600`;
  const border = `border-[6px] border-${color}-300`;

  const deadline = new Date(todo.deadline);

  const editTodo = () => {
    const id = todo.id;
    const newTodo = [...todos.todos];
    for (let i = 0; i < newTodo.length; i++) {
      if (id === newTodo[i].id) {
        newTodo[i].title = title;
        todos.setTodos(newTodo);
        onHide();
      }
    }
  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Header>Change To-do</Header>
        <Input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          label="Title"
          placeholder={"Write down a title for a to-do"}
        />
        <Footer submit={editTodo}>Save</Footer>
      </Modal>

      <div
        className={`w-auto m-[10px] inline-block p-5 cursor-pointer ${bg} ${border} h-auto text-white rounded-3xl`}
      >
        <div
          onClick={() => setShow(true)}
          className="flex   items-center justify-center "
        >
          <div className="flex items-center justify-center h-full"></div>
          <div className="h-12  flex items-center justify-center flex-col">
            <div className="w-auto todo-text">{todo.title}</div>
            {todo.deadline && (
              <div>{`${deadline.getHours()} : ${deadline.getMinutes()}`}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default observer(EditableTodo);
