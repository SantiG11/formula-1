import CountdownTimer from "@/components/shared/CountdownTimer";
import NameLink from "@/components/shared/NameLink";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import useGetData from "@/hooks/useGetData";
import formatDate from "@/lib/formatDate";
import type { RaceInfoApiResponse } from "@/lib/types";
import { getAssetUrl } from "@/utils/getImage";
import { useNavigate, useParams } from "react-router-dom";

export default function RacePage() {
  const navigate = useNavigate();
  const { raceId } = useParams();

  const {
    data: raceData,
    loading,
    error,
  } = useGetData<RaceInfoApiResponse>(`/2026/${raceId}`);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const raceDate = new Date(raceData?.race[0].schedule.race.date || "");

  const raceInfo = raceData?.race[0];

  const date = raceInfo ? formatDate(raceInfo.schedule.race.date) : undefined;

  const handlePrevRace = () => {
    navigate(`/calendar/${raceInfo && raceInfo?.round - 1}`);
  };

  const handleNextRace = () => {
    navigate(`/calendar/${raceInfo && raceInfo?.round + 1}`);
  };

  const assetUrl = getAssetUrl({
    type: "Circuits",
    id: raceInfo?.circuit.circuitId,
    extension: "avif",
  });

  if (loading) return <p>Loading race details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <SectionContainer>
      <SectionTitle>{raceInfo?.raceName}</SectionTitle>

      {raceDate && raceDate > today && (
        <CountdownTimer round={raceInfo?.round} />
      )}
      <div className="flex flex-col md:flex-row gap-4 border-2 bg-secondary border-secondary rounded-2xl py-5">
        <div className="flex justify-center items-center min-h-[200px]">
          <img
            src={assetUrl || ""}
            alt={raceInfo?.circuit.circuitId}
            className="object-contain max-h-[300px] w-full md:w-auto"
          />
        </div>
        <div className="flex flex-col gap-5 justify-start p-2">
          <p className="font-bold text-mute">Round {raceInfo?.round}</p>
          <p>
            Date:{" "}
            <label className="font-bold">
              {date ?? raceInfo?.schedule.race.date}
            </label>
          </p>

          <p>
            Laps: <label className="font-bold">{raceInfo?.laps}</label>
          </p>

          <p>
            Location:{" "}
            <label className="font-bold">
              {raceInfo?.circuit.city}, {raceInfo?.circuit.country}
            </label>{" "}
          </p>

          <p>
            Circuit:
            <label className="font-bold"></label>
            <NameLink link={`/circuits/${raceInfo?.circuit.circuitId}`}>
              {" "}
              {raceInfo?.circuit.circuitName}
            </NameLink>
          </p>
          {raceDate && raceDate < today && (
            <p>
              <NameLink link={`/${raceInfo?.round}`}>See result</NameLink>
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevRace}
          disabled={raceInfo && raceInfo?.round <= 1}
        >
          Prev Race
        </Button>
        <Button
          variant="outline"
          onClick={handleNextRace}
          disabled={raceInfo && raceInfo?.round >= 24}
        >
          Next Race
        </Button>
      </div>
    </SectionContainer>
  );
}
