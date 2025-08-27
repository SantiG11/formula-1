import "./App.css";

import Layout from "./components/Layout";

import Hero from "./components/sections/Hero";
import RaceResult from "./components/sections/RaceResult";
import DriverStandings from "./components/sections/DriverStandings";
import TeamStandings from "./components/sections/TeamStandings";

function App() {
  return (
    <Layout>
      {/* <div className="flex-col flex items-center justify-center gap-5 mt-2"> */}

      <Hero />
      <RaceResult />
      <DriverStandings />
      <TeamStandings />
      {/* </div> */}
    </Layout>
  );
}

export default App;
