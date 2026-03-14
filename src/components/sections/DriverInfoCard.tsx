import type { Driver } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
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
            <div className="w-full h-46 overflow-hidden rounded-xl">
              <img
                src={assetUrl || ""}
                alt={driver.driverId}
                className="w-full h-full object-cover object-top "
              />
            </div>
          </CardContent>
        </Card>
      </NameLink>
    );
  }
}
