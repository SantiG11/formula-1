import { useState } from "react";
import "./App.css";

import Layout from "./components/Layout";
import { Calendar } from "./components/ui/calendar";
import Hero from "./components/sections/Hero";
import RaceResult from "./components/sections/RaceResult";

function App() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <Layout>
      <div className="flex-col flex items-center justify-center gap-5 mt-2">
        <h1 className="text-3xl font-bold w-full text-center">
          Welcome to the F1 App!
        </h1>
        <Hero />
        <RaceResult />
      </div>
    </Layout>
  );
}

export default App;
