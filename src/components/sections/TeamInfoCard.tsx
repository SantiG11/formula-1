import type { Team } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import { getAssetUrl } from "@/utils/getImage";

import NameLink from "../shared/NameLink";

export default function TeamInfoCard(team: Team) {
  const assetUrl = getAssetUrl({
    type: "Teams",
    id: team.teamId,
    extension: "avif",
  });

  return (
    <NameLink link={`/teams/${team.teamId}`}>
      <Card>
        <CardHeader>
          <CardTitle>{team.teamName}</CardTitle>
        </CardHeader>
        <CardContent className="  ">
          <img src={assetUrl || ""} alt={team.teamId} className="w-full" />
        </CardContent>
      </Card>
    </NameLink>
  );
}
