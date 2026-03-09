import NameLink from "@/components/shared/NameLink";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionTitle from "@/components/shared/SectionTitle";
import useGetData from "@/hooks/useGetData";

import type { DriverInfoApiResponse } from "@/lib/types";
import { getAssetUrl } from "@/utils/getImage";
import { useParams } from "react-router-dom";

export default function DriverPage() {
  const { driverId } = useParams();

  const {
    data: driverData,
    loading,
    error,
  } = useGetData<DriverInfoApiResponse>(`/current/drivers/${driverId}`);

  const assetUrl = getAssetUrl({
    type: "Drivers",
    id: driverData?.driver.driverId,
    extension: "avif",
  });

  if (loading) return <p>Loading driver details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <SectionContainer>
      <SectionTitle>
        {driverData?.driver.name} {driverData?.driver.surname}
      </SectionTitle>

      <div className="flex flex-col  gap-4 bg-secondary rounded-2xl py-5">
        <div className="flex justify-center items-center">
          <div className="w-86 h-86 overflow-hidden rounded-xl">
            <img
              src={assetUrl || ""}
              alt={driverData?.driver.driverId}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-start p-2 mx-4 bg-secondary/40 flex-1 rounded-md">
          <div className="flex px-4 py-1 bg-red-500/80 w-fit rounded-3xl border-1 border-red-700">
            <p className="font-bold tracking-wider text-sm">
              {driverData?.driver.shortName}
            </p>
          </div>

          <p className=" px-2  py-1">
            Number:{" "}
            <label className="font-bold">{driverData?.driver.number}</label>
          </p>

          <p className=" px-2  py-1">
            Team:{" "}
            <NameLink link={`/teams/${driverData?.team.teamId}`}>
              {driverData?.team.teamName}
            </NameLink>
          </p>

          <p className=" px-2  py-1">
            Country:{" "}
            <label className="font-bold">
              {driverData?.driver.nationality}
            </label>
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
