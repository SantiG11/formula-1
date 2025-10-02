import Grid from "@/components/shared/Grid";
import InfoCard from "@/components/shared/InfoCard";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionTitle from "@/components/shared/SectionTitle";
import { Skeleton } from "@/components/ui/skeleton";
import useGetData from "@/hooks/useGetData";
import type { CurrentDriversInfoApiResponse } from "@/lib/types";

export default function DriversPage() {
  const {
    data: driversData,
    loading,
    error,
  } = useGetData<CurrentDriversInfoApiResponse>("/current/drivers");

  if (loading) return <Skeleton className="h-full w-full" />;
  if (error) return <p>Error: {error}</p>;

  return (
    <SectionContainer>
      <SectionTitle>Drivers info page</SectionTitle>

      <Grid>
        {driversData?.drivers.map((driver) => {
          return <InfoCard {...driver} />;
        })}
      </Grid>
    </SectionContainer>
  );
}
