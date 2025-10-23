import type { RaceInfo } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import NameLink from "../shared/NameLink";
import { getAssetUrl } from "@/utils/getImage";
import { Link } from "react-router-dom";
import formatDate from "@/lib/formatDate";

export default function RaceInfoCard(race: RaceInfo) {
  const assetUrl = getAssetUrl({
    type: "Circuits",
    id: race.circuit.circuitId,
    extension: "avif",
  });

  let date = formatDate(race.schedule.race.date);

  if (!assetUrl) {
    return null;
  }

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
            <p> {date}</p>
            <p>
              {race.circuit.city}, {race.circuit.country}
            </p>
          </CardDescription>
        </CardFooter>
      </Link>
    </Card>
  );
}
