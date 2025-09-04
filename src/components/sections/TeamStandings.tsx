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

type TableData = {
  season: number;
  constructors_championship: [
    {
      position: number;
      points: number;
      team: {
        teamId: string;
        teamName: string;
      };
    },
  ];
};

export default function TeamStandings() {
  const {
    data: tableData,
    loading,
    error,
  } = useGetData<TableData>("/constructors-championship");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <SectionContainer>
      <SectionTitle>Constructors Championship</SectionTitle>

      <TableContainer>
        <Table className="text-xs w-[100%]   ">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Pos</TableHead>
              <TableHead className="text-center">Team</TableHead>
              <TableHead className="text-center">Pts</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData?.constructors_championship.map((teamData) => {
              return (
                <TableRow key={teamData.team.teamName}>
                  <TableCell className="text-center">
                    {teamData.position}
                  </TableCell>
                  <TableCell className="text-center w-">
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
