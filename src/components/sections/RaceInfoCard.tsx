import type { RaceInfo } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { getAssetUrl } from "@/utils/getImage";
import { Link } from "react-router-dom";

export default function RaceInfoCard(race: RaceInfo) {
  const assetUrl = getAssetUrl({
    type: "Circuits",
    id: race.circuit.circuitId,
    extension: "avif",
  });

  if (!assetUrl) {
    return null;
  }

  const raceDate = race.schedule?.race?.date ?? null;
  const raceTime = race.schedule?.race?.time ?? null;

  const instant =
    raceDate && raceTime ? new Date(`${raceDate}T${raceTime}`) : null;

  const isValidInstant = instant && !Number.isNaN(instant.getTime());

  const localDateTime = isValidInstant
    ? new Intl.DateTimeFormat(undefined, {
        month: "short",
        day: "2-digit",
      }).format(instant)
    : "Date TBD";

  return (
    <Card className="group">
      <Link to={`${race.round}`} className="h-full">
        <CardHeader>
          <CardTitle>
            <p className="text-sm font-bold text-muted-foreground ">
              Round {race.round}
            </p>
            <p className="font-extrabold text-xl group-hover:underline mt-1">
              {race.circuit.country}
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <img
            src={assetUrl}
            alt={race.circuit.circuitId}
            className="flex justify-center items-center  my-2"
          />
        </CardContent>
        <CardFooter>
          <CardDescription className="flex flex-col gap-1 mt-2 justify-end">
            <p>{localDateTime} </p>
            <p>
              {race.circuit.city}, {race.circuit.country}
            </p>
          </CardDescription>
        </CardFooter>
      </Link>
    </Card>
  );
}
