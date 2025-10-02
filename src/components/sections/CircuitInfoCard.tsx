import type { Circuit } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function CircuitInfoCard(circuit: Circuit) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{circuit.circuitName}</CardTitle>
      </CardHeader>
      <CardContent className=" border-2 border-accent">
        <img
          src={circuit.url}
          alt={circuit.circuitId}
          className="flex justify-center items-center border-2 border-accent min-h-[200px]"
        />
      </CardContent>
      <CardFooter>
        <CardDescription className="flex flex-wrap justify-between gap-2">
          <p>Country: {circuit.country}</p>
          <p>City: {circuit.city}</p>
          <p>Record: {circuit.lapRecord}</p>
          <p>Length: {circuit.circuitLength}</p>
          <p>First participation: {circuit.firstParticipationYear}</p>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
