import NameLink from "@/components/shared/NameLink";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionTitle from "@/components/shared/SectionTitle";
import useGetData from "@/hooks/useGetData";
import type { TeamInfoApiResponse } from "@/lib/types";
import { getAssetUrl } from "@/utils/getImage";
import { Link, useParams } from "react-router-dom";

export default function TeamPage() {
  const { teamId } = useParams();

  const {
    data: teamData,
    loading,
    error,
  } = useGetData<TeamInfoApiResponse>(`/current/teams/${teamId}/drivers`);

  const assetUrl = getAssetUrl({
    type: "Teams",
    id: teamData?.team.teamId,
    extension: "avif",
  });

  console.log(teamData?.drivers[0].driver.name);

  if (loading) return <p>Loading team details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <SectionContainer>
      <SectionTitle>{teamData?.team.teamName}</SectionTitle>

      <div className="flex gap-4 bg-secondary border-2 rounded-2xl overflow-hidden p-5 items-center">
        <div>
          <img
            src={assetUrl || ""}
            alt={teamData?.team.teamId}
            className="flex justify-center items-center border-2 border-accent  w-sm"
          />
        </div>
        <div className="flex flex-col gap-5 justify-start p-2">
          <p>Country: {teamData?.team.teamNationality}</p>
          <p>First Appeareance: {teamData?.team.firstAppeareance}</p>
          <p>
            Constructors championships:{" "}
            {teamData?.team.constructorsChampionships}
          </p>
          <p>Drivers championships: {teamData?.team.driversChampionships}</p>
          <p>
            Drivers:
            <NameLink link={`/drivers/${teamData?.drivers[0].driver.driverId}`}>
              {teamData?.drivers[0].driver.name}{" "}
              {teamData?.drivers[0].driver.surname}
            </NameLink>
            &
            <NameLink link={`/drivers/${teamData?.drivers[1].driver.driverId}`}>
              {teamData?.drivers[1].driver.name}{" "}
              {teamData?.drivers[1].driver.surname}
            </NameLink>
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
