import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import SectionContainer from "../shared/SectionContainer";
import SectionTitle from "../shared/SectionTitle";
import TableContainer from "../shared/TableContainer";
import useGetData from "@/hooks/useGetData";
import { Skeleton } from "../ui/skeleton";

import type { ConstructorsChampionshipApiResponse } from "@/lib/types";

export default function TeamStandings() {
  const {
    data: teamsData,
    loading,
    error,
  } = useGetData<ConstructorsChampionshipApiResponse>(
    "/current/constructors-championship",
  );

  if (loading)
    return (
      <SectionContainer>
        <Skeleton className="h-[32px] w-[180px]" />
        <Skeleton className="h-[400px] " />
      </SectionContainer>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <SectionContainer classes="pb-5">
      <SectionTitle>Constructors Championship</SectionTitle>

      <TableContainer>
        <Table className="text-xs w-[100%]">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Pos</TableHead>
              <TableHead className="text-center">Team</TableHead>
              <TableHead className="text-center">Pts</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teamsData?.constructors_championship.map((teamData) => {
              return (
                <TableRow key={teamData.team.teamName}>
                  <TableCell className="text-center">
                    {teamData.position}
                  </TableCell>
                  <TableCell className="text-center ">
                    {teamData.team.teamName
                      .replace(/\b(Formula 1 Team|F1 Team)\b/g, "")
                      .trim()}
                  </TableCell>
                  <TableCell className="text-center">
                    {teamData.points}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </SectionContainer>
  );
}
