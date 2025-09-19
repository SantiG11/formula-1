import useGetData from "@/hooks/useGetData";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import type { RaceData } from "@/lib/types";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { data: data, loading, error } = useGetData<RaceData>("/current/next");

  const nextRaceDate = data
    ? `${data?.race?.[0].schedule.race.date}  ${data?.race?.[0].schedule.race.time}`
    : new Date().getTime();

  function getTimeDifference(targetDate: number) {
    const now = new Date().getTime();
    const distance = targetDate - now;

    setTimeLeft({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    });
  }

  useEffect(() => {
    console.log(nextRaceDate);
    const targetDate = new Date(nextRaceDate).getTime();

    getTimeDifference(targetDate);

    const interval = setInterval(() => {
      getTimeDifference(targetDate);
    }, 1000);

    return () => clearInterval(interval);
  }, [nextRaceDate]);

  if (
    loading ||
    (timeLeft.days <= 0 &&
      timeLeft.hours <= 0 &&
      timeLeft.minutes <= 0 &&
      timeLeft.seconds <= 0)
  )
    return (
      <div className="flex justify-center h-[56px]">
        <Skeleton className="h[56px] w-[235px]" />
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex justify-center gap-4 sm:gap-8 text-center">
      <div className="flex flex-col">
        <span className="text-4xl sm:text-6xl font-bold text-primary">
          {String(timeLeft.days).padStart(2, "0")}
        </span>
        <span className="text-xs uppercase text-muted-foreground">Days</span>
      </div>
      <div className="flex flex-col">
        <span className="text-4xl sm:text-6xl font-bold text-primary">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="text-xs uppercase text-muted-foreground">Hours</span>
      </div>
      <div className="flex flex-col">
        <span className="text-4xl sm:text-6xl font-bold text-primary">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="text-xs uppercase text-muted-foreground">Minutes</span>
      </div>
      <div className="flex flex-col">
        <span className="text-4xl sm:text-6xl font-bold text-primary">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <span className="text-xs uppercase text-muted-foreground">Seconds</span>
      </div>
    </div>
  );
}
