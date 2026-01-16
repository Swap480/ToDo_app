import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Todos = () => {
  const todos = [
    {
      id: 1,
      title: "Buy Bread",
      description: "Description of Todo 1",
      date: "24-02-24",
    },
    {
      id: 2,
      title: "Go for a Walk",
      description: "Description of Todo 2",
      date: "24-02-24",
    },
    {
      id: 3,
      title: "Attend Painting class",
      description: "Description of Todo 3",
      date: "24-02-24",
    },
    {
      id: 4,
      title: "Buy flowers",
      description: "Description of Todo 4",
      date: "24-02-24",
    },
    {
      id: 5,
      title: "Visit Church",
      description: "Description of Todo 5",
      date: "12-02-24",
    },
    {
      id: 6,
      title: "Write Journal",
      description: "Description of Todo 6",
      date: "13-03-24",
    },
    {
      id: 7,
      title: "Water the plants",
      description: "Description of Todo 7",
      date: "22-03-24",
    },
    {
      id: 8,
      title: "Clean the windows",
      description: "Description of Todo 8",
      date: "28-03-24",
    },
    {
      id: 9,
      title: "Buy Gifts for Holi",
      description: "Description of Todo 9",
      date: "24-03-24",
    },
  ];

  const todoList = todos.map((todo) => todo.title);

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Todo List</h1>
        {/* {todos.map((todo) => {
          return (
            <ul className="list-group">
              <li className="list-group-item">{todo.title}</li>
            </ul>
          );
        })} */}

        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/todos/1">Buy Bread</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/2">Go for a Walk</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/3">Attend Painting Class</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/4">Buy Flowers</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/5">Visit Church</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/6">Write Journal</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/7">Water the Plants</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/8">Clean the Windows</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/9">Buy Gifts for Holi</Link>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Todos;
