import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import formatDate from "@/lib/formatDate";
import TableContainer from "../shared/TableContainer";
import SectionContainer from "../shared/SectionContainer";
import SectionTitle from "../shared/SectionTitle";
import useGetData from "@/hooks/useGetData";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export type RaceData = {
  season: number;
  races?: {
    round: number;
    raceName?: string;
    date: string;
    results: [
      {
        position: number;
        points: number;
        driver: {
          driverId: string;
          number: number;
          shortName: string;
          name: string;
          surname: string;
        };
        team: {
          teamId: string;
          teamName: string;
        };
      },
    ];
  };
};

interface RaceResultProps {
  race: string;
  isLastRace: boolean;
}

export default function RaceResult({ race, isLastRace }: RaceResultProps) {
  const { data: raceData, loading, error } = useGetData<RaceData>(race);

  const [round, setRound] = useState<number | undefined>();

  useEffect(() => {
    setRound(raceData?.races?.round);
  }, [raceData]);

  if (loading)
    return (
      <SectionContainer>
        <Skeleton className="h-[32px] w-[150px]" />
        <Skeleton className="h-[24px] w-[170px]" />
        <Skeleton className="h-[24px] w-[120px]" />
        <Skeleton className="h-[850px] " />
      </SectionContainer>
    );
  if (error) return <p>Error: {error}</p>;

  // console.log(raceData);

  return (
    <SectionContainer>
      <SectionTitle>
        {isLastRace ? `Last race results (round ${round})` : `Round ${round}`}
      </SectionTitle>
      <h3>{raceData?.races?.raceName ?? "Race Name"}</h3>
      <p>
        {raceData?.races?.date
          ? formatDate(raceData?.races?.date)
          : "Race Date"}
      </p>

      <TableContainer>
        <Table className="text-xs">
          <TableCaption>
            {raceData?.races?.raceName ?? "Race Name"}
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Pos</TableHead>
              <TableHead className="text-center">Driver</TableHead>
              <TableHead className="text-center">Number</TableHead>
              <TableHead className="text-center">Team</TableHead>
              <TableHead className="text-center">Pts</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {raceData?.races?.results.map((result) => {
              return (
                <TableRow key={result.driver.number}>
                  <TableCell className="text-center">
                    {result.position}
                  </TableCell>
                  <TableCell className="text-left w-[20%]">
                    {result.driver.name} {result.driver.surname}
                  </TableCell>
                  <TableCell className="text-center">
                    {result.driver.number}
                  </TableCell>
                  <TableCell className="text-left  w-[20%]">
                    {result.team.teamName
                      .replace(/\b(Formula 1 Team|F1 Team)\b/g, "")
                      .trim()}
                  </TableCell>
                  <TableCell className="text-center">{result.points}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </SectionContainer>
  );
}
