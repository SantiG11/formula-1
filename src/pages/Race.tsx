import CountdownTimer from "@/components/shared/CountdownTimer";
import NameLink from "@/components/shared/NameLink";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import useGetData from "@/hooks/useGetData";
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
  } = useGetData<RaceInfoApiResponse>(`/2025/${raceId}`);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const raceDate = new Date(raceData?.race[0].schedule.race.date || "");

  const raceInfo = raceData?.race[0];

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
      <div className="flex gap-4 bg-secondary border-2 rounded-2xl overflow-hidden py-5">
        <div>
          <img
            src={assetUrl || ""}
            alt={raceInfo?.circuit.circuitId}
            className="flex justify-center items-center border-2 border-accent aspect-auto h-[300px]"
          />
        </div>
        <div className="flex flex-col gap-5 justify-start p-2">
          <p>Round: {raceInfo?.round}</p>
          <p>Date: {raceInfo?.schedule.race.date}</p>

          <p>Laps: {raceInfo?.laps}</p>

          <p>
            Location: {raceInfo?.circuit.city}, {raceInfo?.circuit.country}{" "}
          </p>

          <p>
            Circuit:
            <NameLink link={`/circuits/${raceInfo?.circuit.circuitId}`}>
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
