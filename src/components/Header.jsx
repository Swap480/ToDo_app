import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <main className="bg-dark text-light py-4">
        <header className="container">
          <h1>Todos</h1>
          <ul className="nav">
            <li className="nav-link">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/todos" className="nav-link">
                {" "}
                Todos{" "}
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </header>
      </main>
    </>
  );
};

export default Header;
