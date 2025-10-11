import type { Circuit } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { getAssetUrl } from "@/utils/getImage";

import NameLink from "../shared/NameLink";

export default function CircuitInfoCard(circuit: Circuit) {
  const assetUrl = getAssetUrl({
    type: "Circuits",
    id: circuit.circuitId,
    extension: "avif",
  });

  if (!assetUrl) {
    return null;
  }

  if (assetUrl) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            <NameLink link={`/circuits/${circuit.circuitId}`}>
              {circuit.circuitName}
            </NameLink>
          </CardTitle>
        </CardHeader>
        <CardContent className=" border-2 border-accent min-h-[200px] flex justify-center items-center">
          <img
            src={assetUrl}
            alt={circuit.circuitId}
            className="flex justify-center items-center border-2 border-accent "
          />
        </CardContent>
        <CardFooter>
          <CardDescription className="flex flex-wrap justify-between gap-2">
            <p>Country: {circuit.country}</p>
            <p>City: {circuit.city}</p>
            <p>Record: {circuit.lapRecord}</p>
            <p>Length: {circuit.circuitLength}</p>
            <p>First participation: {circuit.firstParticipationYear}</p>
            <p>{circuit.circuitId}</p>
          </CardDescription>
        </CardFooter>
      </Card>
    );
  }
}
