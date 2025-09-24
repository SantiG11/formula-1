import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import DriversPage from "./pages/Drivers";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/drivers", element: <DriversPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
