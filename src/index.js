import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Todos from "./pages/Todos";
import About from "./pages/About";
import TodoDetails from "./pages/TodoDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/todos",
    element: <Todos />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/todos/:id",
    element: <TodoDetails />,
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
