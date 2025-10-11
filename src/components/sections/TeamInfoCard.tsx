import type { Team } from "@/lib/types";
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

export default function TeamInfoCard(team: Team) {
  const assetUrl = getAssetUrl({
    type: "Teams",
    id: team.teamId,
    extension: "avif",
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link to={`/teams/${team.teamId}`}>{team.teamName}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className=" border-2 border-accent">
        <img
          src={assetUrl || ""}
          alt={team.teamId}
          className="flex justify-center items-center border-2 border-accent  "
        />
      </CardContent>
      <CardFooter>
        <CardDescription className="flex flex-wrap justify-between gap-2">
          <p>Country: {team.teamNationality}</p>
          <p>Cons championships: {team.constructorsChampionships}</p>
          <p>Drivers championships: {team.driversChampionships}</p>
          <p>First Appeareance: {team.firstAppeareance}</p>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
