import { Link } from "react-router-dom";
import CountdownTimer from "../shared/CountdownTimer";
import { Button } from "../ui/button";
import type { NextRaceApiResponse } from "@/lib/types";
import useGetData from "@/hooks/useGetData";
import { Skeleton } from "../ui/skeleton";

export default function Hero() {
  const { data, loading, error } =
    useGetData<NextRaceApiResponse>("/current/next");

  if (loading)
    return (
      <div className="flex justify-center h-[56px]">
        <Skeleton className="h-[56px] w-[235px]" />
      </div>
    );
  if (error) return <p>Error: {String(error)}</p>;

  return (
    <section className="flex flex-col items-center justify-center text-center gap-12 py-12 sm:py-20 ">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl text-muted-foreground font-bold w-full ">
          Next Grand Prix
        </h1>
        <h2 className="text-5xl font-bold  tracking-tighter text-pretty">
          {data?.race?.[0]?.raceName ?? "Loading..."}
        </h2>
        <p className="text-muted-foreground md:text-xl   text-pretty">
          Lights out and away we go! The next race is just around the corner.
        </p>
      </div>
      <CountdownTimer />
      <div className="flex flex-col w-full gap-5  items-center">
        <Link to={`/calendar/${data?.round}`}>
          <Button className="w-48 h-10">Race Info</Button>
        </Link>
        <Link to={"/calendar"}>
          <Button variant="outline" className="w-48 h-10">
            Race Calendar
          </Button>
        </Link>
      </div>
    </section>
  );
}
