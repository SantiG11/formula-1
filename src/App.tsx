import "./App.css";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <>
      <Header />
      <h1 className="scroll-m-20 text-left p-2 text-4xl text-primary font-extrabold tracking-tight text-balance">
        F1
      </h1>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border"
      />
    </>
  );
}

export default App;
