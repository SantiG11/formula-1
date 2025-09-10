import { useEffect, useState } from "react";
import RaceResult from "./RaceResult";
import type { RaceData } from "./RaceResult";
import useGetData from "@/hooks/useGetData";
import SectionContainer from "../shared/SectionContainer";
import { Button } from "../ui/button";

export default function RaceResultContainer() {
  const {
    data: raceData,
    loading,
    error,
  } = useGetData<RaceData>("/current/last/race");

  const [race, setRace] = useState("");
  const [round, setRound] = useState<number | null>(null);
  const [isLastRace, setIsLastRace] = useState<boolean>(true);

  const getPrevRace = () => {
    setRound((prevRound) => {
      if (prevRound === null) return prevRound;
      if (raceData?.races?.round && prevRound > 1) {
        return prevRound - 1;
      }
      return prevRound;
    });

    console.log(round);
  };

  const getNextRace = () => {
    setRound((prevRound) => {
      if (prevRound === null) return prevRound;
      if (raceData?.races?.round && prevRound < raceData.races.round) {
        return prevRound + 1;
      }
      return prevRound;
    });

    console.log(round);
  };
  useEffect(() => {
    if (raceData?.races?.round) {
      setRound(raceData?.races?.round);
    }
    console.log(round);
  }, [raceData]);

  useEffect(() => {
    if (round === raceData?.races?.round) {
      setIsLastRace(true);
    } else {
      setIsLastRace(false);
    }
    setRace(`/2025/${round}/race`);
    console.log(round);
  }, [round]);

  return (
    <SectionContainer>
      <RaceResult
        race={race === "" ? "/current/last/race" : race}
        key={race}
        isLastRace={isLastRace}
      />
      <div className="flex justify-between">
        <Button variant="outline" onClick={getPrevRace}>
          Previous Race
        </Button>
        <Button variant="outline" onClick={getNextRace}>
          Next Race
        </Button>
      </div>
    </SectionContainer>
  );
}
