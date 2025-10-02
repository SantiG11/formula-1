import type { Driver } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function InfoCard(driver: Driver) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {driver.name} {driver.surname}
        </CardTitle>
      </CardHeader>
      <CardContent className=" border-2 border-accent">
        <img
          src={driver.url}
          alt={driver.driverId}
          className="flex justify-center items-center border-2 border-accent min-h-[200px]"
        />
      </CardContent>
      <CardFooter>
        <CardDescription className="flex flex-wrap justify-between gap-2">
          <p>Country: {driver.nationality}</p>
          <p>Team: {driver.teamId}</p>
          <p>Born in: {driver.birthday}</p>
          <p>Number: {driver.number}</p>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
