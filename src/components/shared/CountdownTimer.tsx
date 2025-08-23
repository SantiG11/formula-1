import { useEffect, useState } from "react";

const targetDate = new Date("2024-09-22T14:00:00Z").getTime();

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        // You can set a "Race in progress" or "Race finished" message here
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
