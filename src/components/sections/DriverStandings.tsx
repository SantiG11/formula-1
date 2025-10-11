import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import SectionContainer from "../shared/SectionContainer";
import TableContainer from "../shared/TableContainer";
import SectionTitle from "../shared/SectionTitle";
import useGetData from "@/hooks/useGetData";
import { Skeleton } from "../ui/skeleton";
import type { DriversChampionshipApiResponse } from "@/lib/types";

import NameLink from "../shared/NameLink";

export default function DriverStandings() {
  const {
    data: driversData,
    loading,
    error,
  } = useGetData<DriversChampionshipApiResponse>(
    "/current/drivers-championship",
  );

  if (loading)
    return (
      <SectionContainer>
        <Skeleton className="h-[32px] w-[180px]" />
        <Skeleton className="h-[850px] " />
      </SectionContainer>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <SectionContainer>
      <SectionTitle>Drivers Championship</SectionTitle>

      <TableContainer>
        <Table className="text-xs">
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
            {driversData?.drivers_championship.map((driverData) => {
              return (
                <TableRow key={driverData.driver.name}>
                  <TableCell className="text-center">
                    {driverData.position}
                  </TableCell>
                  <TableCell className="text-left  w-[20%]">
                    <NameLink link={`/drivers/${driverData.driverId}`}>
                      {driverData.driver.name} {driverData.driver.surname}
                    </NameLink>
                  </TableCell>
                  <TableCell className="text-center">
                    {driverData.driver.number}
                  </TableCell>
                  <TableCell className="text-left  w-[20%]">
                    <NameLink link={`/teams/${driverData.teamId}`}>
                      {driverData.team.teamName
                        .replace(/\b(Formula 1 Team|F1 Team)\b/g, "")
                        .trim()}
                    </NameLink>
                  </TableCell>
                  <TableCell className="text-center">
                    {driverData.points}
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
