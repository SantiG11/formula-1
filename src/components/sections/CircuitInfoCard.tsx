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
      <NameLink link={`/circuits/${circuit.circuitId}`}>
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="line-clamp-1.5">
              {circuit.circuitName}
            </CardTitle>
          </CardHeader>
          <CardContent className="  flex justify-center items-center">
            <img
              src={assetUrl}
              alt={circuit.circuitId}
              className="flex justify-center items-center  "
            />
          </CardContent>
        </Card>
      </NameLink>
    );
  }
}
