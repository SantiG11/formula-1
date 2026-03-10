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

import { Skeleton } from "@/components/ui/skeleton";
import type { RaceResultApiResponse } from "@/lib/types";

import NameLink from "../shared/NameLink";
import useIsMobile from "@/hooks/useIsMobile";

interface RaceResultProps {
  race: string;
  isLastRace: boolean;
}

export default function RaceResult({ race, isLastRace }: RaceResultProps) {
  const isMobile = useIsMobile();

  const {
    data: raceData,
    loading,
    error,
  } = useGetData<RaceResultApiResponse>(race);

  const round = raceData?.races?.round;

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

  return (
    <SectionContainer>
      <div className="flex flex-col gap-1">
        <SectionTitle>
          {isLastRace ? `Last race results (round ${round})` : `Round ${round}`}
        </SectionTitle>
        <h3>{raceData?.races?.raceName ?? "Race Name"}</h3>
        <p>
          {raceData?.races?.date
            ? formatDate(raceData?.races?.date)
            : "Race Date"}
        </p>
      </div>

      <TableContainer>
        <Table className="text-sm">
          <TableCaption>
            {raceData?.races?.raceName ?? "Race Name"}
          </TableCaption>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
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
                  <TableCell className="text-center text-pretty  w-[20%]">
                    <NameLink link={`/drivers/${result.driver.driverId}`}>
                      {isMobile
                        ? result.driver.shortName
                        : `${result.driver.name} ${result.driver.surname}`}
                    </NameLink>
                  </TableCell>
                  <TableCell className="text-center">
                    {result.driver.number}
                  </TableCell>
                  <TableCell
                    className={`text-center text-pretty md:text-center w-[20%]`}
                  >
                    <NameLink link={`/teams/${result.team.teamId}`}>
                      {result.team.teamName
                        .replace(/\b(Formula 1 Team|F1 Team)\b/g, "")
                        .trim()}
                    </NameLink>
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
