import type { Driver } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { getAssetUrl } from "@/utils/getImage";

export default function DriverInfoCard(driver: Driver) {
  const assetUrl = getAssetUrl({
    type: "Drivers",
    id: driver.driverId,
    extension: "avif",
  });

  console.log(assetUrl);

  // if (assetUrl) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {driver.name} {driver.surname}
        </CardTitle>
      </CardHeader>
      <CardContent className=" border-2 border-accent">
        <img
          src={assetUrl || ""}
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
          <p>id: {driver.driverId}</p>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
// }
