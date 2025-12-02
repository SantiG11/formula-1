import NameLink from "@/components/shared/NameLink";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionTitle from "@/components/shared/SectionTitle";
import useGetData from "@/hooks/useGetData";
import type { TeamInfoApiResponse } from "@/lib/types";
import { getAssetUrl } from "@/utils/getImage";
import { useParams } from "react-router-dom";

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

  if (loading) return <p>Loading team details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <SectionContainer>
      <SectionTitle>{teamData?.team.teamName}</SectionTitle>

      <div className="flex flex-col md:flex-row gap-4 border-2 border-secondary rounded-2xl bg-secondary py-5 px-2">
        <div className="flex justify-center items-center min-h-[150px]">
          <img
            src={assetUrl || ""}
            alt={teamData?.team.teamId}
            className="flex object-contain justify-center items-center  w-sm"
          />
        </div>
        <div className="flex flex-col gap-5 justify-start p-2">
          <p>
            Country:{" "}
            <label className="font-bold">
              {teamData?.team.teamNationality}
            </label>
          </p>
          <p>
            First Appeareance:{" "}
            <label className="font-bold">
              {teamData?.team.firstAppeareance}
            </label>
          </p>
          <p>
            Constructors championships:{" "}
            <label className="font-bold">
              {teamData?.team.constructorsChampionships}
            </label>
          </p>
          <p>
            Drivers championships:{" "}
            <label className="font-bold">
              {teamData?.team.driversChampionships}
            </label>
          </p>
          <p>
            Drivers:{" "}
            <label className="font-bold">
              <NameLink
                link={`/drivers/${teamData?.drivers[0].driver.driverId}`}
              >
                {teamData?.drivers[0].driver.name}{" "}
                {teamData?.drivers[0].driver.surname}
              </NameLink>{" "}
              &{" "}
              <NameLink
                link={`/drivers/${teamData?.drivers[1].driver.driverId}`}
              >
                {teamData?.drivers[1].driver.name}{" "}
                {teamData?.drivers[1].driver.surname}
              </NameLink>
            </label>
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
