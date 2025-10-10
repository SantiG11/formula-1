import type { RaceInfo } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function RaceInfoCard(race: RaceInfo) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{race.raceName}</CardTitle>
      </CardHeader>
      <CardContent className=" border-2 border-accent">
        <CardDescription className="flex flex-wrap justify-between gap-2">
          <p>Circuit: {race.circuit.circuitName}</p>
          <p>
            Place: {race.circuit.city}, {race.circuit.country}
          </p>
          <p>Laps: {race.laps}</p>
          <p>Date: {race.schedule.race.date}</p>
        </CardDescription>
      </CardContent>
      <CardFooter>
        <CardDescription className="flex flex-wrap justify-between gap-2">
          <p>Round: {race.round}</p>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
