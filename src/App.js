import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <main className="App">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="ToDo app image"
                style={{ maxWidth: "100%", height: "auto" }}
                className="rounded mb-4 d-block mx-auto"
              />
              <h1>Todos</h1>
              <p>Welcome to the todo application!</p>
              <Link to="todos" className="btn btn-primary">
                View Todos
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
