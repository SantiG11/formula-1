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

import NameLink from "../shared/NameLink";

export default function DriverInfoCard(driver: Driver) {
  const assetUrl = getAssetUrl({
    type: "Drivers",
    id: driver.driverId,
    extension: "avif",
  });

  if (assetUrl) {
    return (
      <NameLink link={`/drivers/${driver.driverId}`}>
        <Card>
          <CardHeader>
            <CardTitle>
              {driver.name} {driver.surname}
            </CardTitle>
          </CardHeader>
          <CardContent className=" ">
            <img
              src={assetUrl || ""}
              alt={driver.driverId}
              className="flex justify-center items-center  min-h-[200px]"
            />
          </CardContent>
        </Card>
      </NameLink>
    );
  }
}
