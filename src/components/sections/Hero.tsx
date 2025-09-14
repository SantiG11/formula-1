import CountdownTimer from "../shared/CountdownTimer";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-8 py-12 sm:py-24 ">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold w-full text-center ">
          Welcome to the F1 App!
        </h1>
        <h2 className="text-3xl font-bold tracking-tighter sm:text:5xl">
          Monza Grand Prix
        </h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl  text-pretty">
          Lights out and away we go! The next race is just around the corner.
        </p>
      </div>
      <CountdownTimer />
      <div className="flex flex-col w-full gap-5  items-center">
        <Button className="w-48 h-10">Race Calendar</Button>
        <Button className="w-48 h-10" variant="outline">
          Standings
        </Button>
      </div>
    </section>
  );
}
