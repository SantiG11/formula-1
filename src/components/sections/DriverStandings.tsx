import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

type tableDate = {
  season: number;
  drivers_championship: [
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

export default function DriverStandings() {
  const [tableData, setTableData] = useState<tableDate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://f1api.dev/api/current/drivers-championship",
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
    <section>
      <h2>Drivers Championship</h2>

      <div>
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
            {tableData?.drivers_championship.map((driverData) => {
              return (
                <TableRow>
                  <TableCell className="text-center">
                    {driverData.position}
                  </TableCell>
                  <TableCell className="text-center">
                    {driverData.driver.name} {driverData.driver.surname}
                  </TableCell>
                  <TableCell className="text-center">
                    {driverData.driver.number}
                  </TableCell>
                  <TableCell className="text-center">
                    {driverData.team.teamName
                      .replace(/\b(Formula 1 Team|F1 Team)\b/g, "")
                      .trim()}
                  </TableCell>
                  <TableCell className="text-center">
                    {driverData.points}
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell className="text-center">1</TableCell>
              <TableCell className="text-center">Max Verstappen</TableCell>
              <TableCell className="text-center">1</TableCell>
              <TableCell className="text-center">Red Bull</TableCell>
              <TableCell className="text-center">25</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
