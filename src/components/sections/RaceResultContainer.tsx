import { useEffect, useState } from "react";
import RaceResult from "./RaceResult";
import type { RaceResultApiResponse } from "@/lib/types";
import useGetData from "@/hooks/useGetData";
import SectionContainer from "../shared/SectionContainer";
import { Button } from "../ui/button";

export type RaceResultProps = {
  round?: number | null;
};

export default function RaceResultContainer({ round }: RaceResultProps) {
  const [currentRound, setCurrentRound] = useState<number | null>(
    round ? round : null,
  );

  const { data: lastRaceData } =
    useGetData<RaceResultApiResponse>("/current/last/race");
  const lastRoundNumber = lastRaceData?.races?.round;

  useEffect(() => {
    if (lastRoundNumber && !round) {
      setCurrentRound(lastRoundNumber);
    }
  }, [lastRoundNumber]);

  const isLastRace = currentRound === lastRoundNumber;
  const raceEndpoint = currentRound ? `/2025/${currentRound}/race` : "";

  const handlePrevRace = () => {
    setCurrentRound((prev) => (prev ? prev - 1 : null));
  };

  const handleNextRace = () => {
    setCurrentRound((prev) => (prev ? prev + 1 : null));
  };

  return (
    <SectionContainer classes="py-4">
      <RaceResult
        race={raceEndpoint}
        key={raceEndpoint}
        isLastRace={isLastRace}
      />
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevRace}
          disabled={currentRound === 1}
        >
          Prev Race
        </Button>
        <Button
          variant="outline"
          onClick={handleNextRace}
          disabled={isLastRace}
        >
          Next Race
        </Button>
      </div>
    </SectionContainer>
  );
}
