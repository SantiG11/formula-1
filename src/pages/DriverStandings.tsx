import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import SectionContainer from "../components/shared/SectionContainer";
import TableContainer from "../components/shared/TableContainer";
import SectionTitle from "../components/shared/SectionTitle";
import useGetData from "@/hooks/useGetData";
import { Skeleton } from "../components/ui/skeleton";
import type { DriversChampionshipApiResponse } from "@/lib/types";

import NameLink from "../components/shared/NameLink";
import useIsMobile from "@/hooks/useIsMobile";

export default function DriverStandings() {
  const isMobile = useIsMobile();

  const {
    data: driversData,
    loading,
    error,
  } = useGetData<DriversChampionshipApiResponse>("/2026/drivers-championship");

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
        <Table className="text-sm font-bold">
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
            {driversData?.drivers_championship.map((driverData) => {
              return (
                <TableRow key={driverData.driver.name}>
                  <TableCell className="text-center">
                    {driverData.position}
                  </TableCell>
                  <TableCell className={` text-center  w-[20%]`}>
                    <NameLink link={`/drivers/${driverData.driverId}`}>
                      {isMobile
                        ? driverData.driver.shortName
                        : `${driverData.driver.name} ${driverData.driver.surname}`}
                    </NameLink>
                  </TableCell>
                  <TableCell className="text-center">
                    {driverData.driver.number}
                  </TableCell>
                  <TableCell className="text-center  w-[20%]">
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
