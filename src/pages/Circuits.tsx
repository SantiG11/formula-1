import CircuitInfoCard from "@/components/sections/CircuitInfoCard";
import Grid from "@/components/shared/Grid";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionTitle from "@/components/shared/SectionTitle";
import { Skeleton } from "@/components/ui/skeleton";
import useGetData from "@/hooks/useGetData";

import type { CircuitsInfoApiResponse } from "@/lib/types";

export default function CircuitsPage() {
  const {
    data: circuitsData,
    loading,
    error,
  } = useGetData<CircuitsInfoApiResponse>("/circuits");

  if (loading) return <Skeleton className="h-full w-full" />;
  if (error) return <p>Error: {error}</p>;

  return (
    <SectionContainer>
      <SectionTitle>Circuits info page</SectionTitle>

      <Grid>
        {circuitsData?.circuits.map((circuit) => {
          return <CircuitInfoCard {...circuit} key={circuit.circuitId} />;
        })}
      </Grid>
    </SectionContainer>
  );
}
