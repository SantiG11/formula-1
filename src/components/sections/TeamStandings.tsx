import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

type tableDate = {
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
  const [tableData, setTableData] = useState<tableDate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://f1api.dev/api/current/constructors-championship",
        );
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();
        setTableData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="flex flex-col gap-3 p-2">
      <h2>Constructors Championship</h2>

      <div className="border rounded-xl overflow-hidden">
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
                <TableRow>
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
      </div>
    </section>
  );
}
