import Grid from "@/components/shared/Grid";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionTitle from "@/components/shared/SectionTitle";
import { Skeleton } from "@/components/ui/skeleton";
import useGetData from "@/hooks/useGetData";
import type { CurrentDriversInfoApiResponse } from "@/lib/types";
import DriverInfoCard from "@/components/sections/DriverInfoCard";

export default function DriversPage() {
  const {
    data: driversData,
    loading,
    error,
  } = useGetData<CurrentDriversInfoApiResponse>("/2026/drivers");

  if (loading) return <Skeleton className="h-full w-full" />;
  if (error) return <p>Error: {error}</p>;

  return (
    <SectionContainer classes="max-w-[90%] sm:max-w-none justify-center">
      <SectionTitle>Drivers </SectionTitle>

      <Grid>
        {driversData?.drivers.map((driver) => {
          return <DriverInfoCard {...driver} key={driver.driverId} />;
        })}
      </Grid>
    </SectionContainer>
  );
}
