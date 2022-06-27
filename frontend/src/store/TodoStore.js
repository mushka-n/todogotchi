import { makeAutoObservable } from "mobx";

export default class TodoStore {
  constructor() {
    this.todos = [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
        deadline: "2012-01-26T13:51:50.417Z",
        color: 1,
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
        color: 2,
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false,
        color: 3,
      },
      {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true,
        color: 4,
      },
      {
        userId: 5,
        id: 5,
        title: "laboriosam mollitia et  ",
        completed: false,
        color: 6,
      },
      {
        userId: 1,
        id: 6,
        title: "qui ullam ratione quibusdam ",
        completed: false,
        color: 7,
      },
      {
        userId: 1,
        id: 7,
        title: "illo expedita  in",
        completed: false,
        color: 8,
      },
      {
        userId: 1,
        id: 8,
        title: "quo adipisci enim quam ut ab",
        completed: true,
        color: 3,
      },
      {
        userId: 1,
        id: 9,
        title: "molestiae perspiciatis ipsa",
        completed: false,
        color: 9,
      },
      {
        userId: 1,
        id: 10,
        title: "illo est ratione doloremque ",
        completed: true,
        color: 15,
      },
      {
        userId: 1,
        id: 11,
        title: "vero rerum temporibus dolor",
        completed: true,
        color: 2,
      },
      {
        userId: 1,
        id: 12,
        title: "ipsa repellendus fugit nisi",
        completed: true,
        color: 1,
      },
      {
        userId: 1,
        id: 13,
        title: "et doloremque nulla",
        completed: false,
        color: 16,
      },
      {
        userId: 1,
        id: 14,
        title: "repellendus sunt  voluptatum",
        completed: true,
        color: 13,
      },
      {
        userId: 1,
        id: 15,
        title: "ab voluptatum amet voluptas",
        completed: true,
        color: 11,
      },
      {
        userId: 1,
        id: 16,
        title: "accusamus voluptatem",
        completed: true,
        color: 11,
      },
      {
        userId: 1,
        id: 17,
        title: "quo laboriosam deleniti aut qui",
        completed: true,
        color: 16,
      },
      {
        userId: 1,
        id: 18,
        title: "dolorum est  mollitia in culpa",
        completed: false,
        color: 7,
      },
      {
        userId: 1,
        id: 19,
        title: "molestiae ipsa aut voluptatibus ",
        completed: true,
        color: 4,
      },
      {
        userId: 1,
        id: 20,
        title: "ullam nobis ",
        completed: true,
        color: 8,
      },
    ];
    makeAutoObservable(this);
  }

  setTodos = (todos) => {
    this.todos = todos;
  };
}