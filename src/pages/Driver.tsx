import SectionContainer from "@/components/shared/SectionContainer";
import SectionTitle from "@/components/shared/SectionTitle";
import useGetData from "@/hooks/useGetData";
import type { Driver, DriverInfoApiResponse } from "@/lib/types";
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

  console.log(driverData);

  if (loading) return <p>Loading driver details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <SectionContainer>
      <SectionTitle>
        {driverData?.driver.name} {driverData?.driver.surname}
      </SectionTitle>

      <div className="flex gap-4 bg-secondary border-2 rounded-2xl overflow-hidden py-5">
        <div>
          <img
            src={assetUrl || ""}
            alt={driverData?.driver.driverId}
            className="flex justify-center items-center border-2 border-accent aspect-auto h-[300px]"
          />
        </div>
        <div className="flex flex-col gap-5 justify-start p-2">
          <p>Team: {driverData?.team.teamName}</p>
          <p>Born in: {driverData?.driver.birthday}</p>
          <p>Number: {driverData?.driver.number}</p>
          <p>Country: {driverData?.driver.nationality}</p>
        </div>
      </div>
    </SectionContainer>
  );
}
