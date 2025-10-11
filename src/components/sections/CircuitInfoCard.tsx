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
import { Link } from "react-router-dom";

export default function CircuitInfoCard(circuit: Circuit) {
  const assetUrl = getAssetUrl({
    type: "Circuits",
    id: circuit.circuitId,
    extension: "avif",
  });

  if (!assetUrl) {
    return null;
  }
  console.log(assetUrl);
  if (assetUrl) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            <Link to={`/circuits/${circuit.circuitId}`}>
              {circuit.circuitName}
            </Link>
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
