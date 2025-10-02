import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import DriversPage from "./pages/Drivers";
import Layout from "./components/Layout";
import TeamsPage from "./pages/Teams";
import CircuitsPage from "./pages/Circuits";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/drivers", element: <DriversPage /> },
      { path: "/teams", element: <TeamsPage /> },
      { path: "/circuits", element: <CircuitsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
