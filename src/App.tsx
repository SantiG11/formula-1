import "./App.css";

import Layout from "./components/Layout";

import Hero from "./components/sections/Hero";

import DriverStandings from "./components/sections/DriverStandings";
import TeamStandings from "./components/sections/TeamStandings";
import RaceResultContainer from "./components/sections/RaceResultContainer";

function App() {
  return (
    <Layout>
      {/* <div className="flex-col flex items-center justify-center gap-5 mt-2"> */}

      <Hero />
      <RaceResultContainer />

      <DriverStandings />
      <TeamStandings />
      {/* </div> */}
    </Layout>
  );
}

export default App;
