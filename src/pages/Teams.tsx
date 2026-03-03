import Grid from "@/components/shared/Grid";

import SectionContainer from "@/components/shared/SectionContainer";
import SectionTitle from "@/components/shared/SectionTitle";
import { Skeleton } from "@/components/ui/skeleton";
import useGetData from "@/hooks/useGetData";
import type { CurrentTeamsInfoApiResponse } from "@/lib/types";
import TeamInfoCard from "@/components/sections/TeamInfoCard";

export default function TeamsPage() {
  const {
    data: teamsData,
    loading,
    error,
  } = useGetData<CurrentTeamsInfoApiResponse>("/2026/teams");

  if (loading) return <Skeleton className="h-full w-full" />;
  if (error) return <p>Error: {error}</p>;

  return (
    <SectionContainer>
      <SectionTitle>Teams </SectionTitle>

      <Grid cardMinW="300px">
        {teamsData?.teams.map((team) => {
          return <TeamInfoCard {...team} key={team.teamId} />;
        })}
      </Grid>
    </SectionContainer>
  );
}
