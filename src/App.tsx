import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import DriversPage from "./pages/Drivers";
import Layout from "./components/Layout";
import TeamsPage from "./pages/Teams";
import CircuitsPage from "./pages/Circuits";

import CalendarPage from "./pages/Calendar";
import DriverPage from "./pages/Driver";
import TeamPage from "./pages/Team";
import CircuitPage from "./pages/Circuit";
import RacePage from "./pages/Race";
import ResultPage from "./pages/Result";
import TeamStandings from "./pages/TeamStandings";
import DriverStandings from "./pages/DriverStandings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/drivers", element: <DriversPage /> },
      { path: "/drivers/:driverId", element: <DriverPage /> },
      { path: "/teams", element: <TeamsPage /> },
      { path: "/teams/:teamId", element: <TeamPage /> },
      { path: "/circuits", element: <CircuitsPage /> },
      { path: "/circuits/:circuitId", element: <CircuitPage /> },
      { path: "/calendar", element: <CalendarPage /> },
      { path: "/calendar/:raceId", element: <RacePage /> },
      { path: "/:resultId", element: <ResultPage /> },
      { path: "/teamStandings", element: <TeamStandings /> },
      { path: "/driverStandings", element: <DriverStandings /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
