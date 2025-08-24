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
import formatDate from "@/lib/formatDate";
import { useEffect, useState } from "react";

type RaceData = {
  races?: {
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
  // Add other properties as needed
};
// Add other properties as needed

export default function RaceResult() {
  const [raceData, setRaceData] = useState<RaceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://f1api.dev/api/current/last/race");
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();
        setRaceData(data);
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
      <h2>Last race results</h2>
      <h3>{raceData?.races?.raceName ?? "Race Name"}</h3>
      <p>
        {raceData?.races?.date
          ? formatDate(raceData?.races?.date)
          : "Race Date"}
      </p>
      <div>
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
                <TableRow>
                  <TableCell className="text-center">
                    {result.position}
                  </TableCell>
                  <TableCell className="text-center">
                    {result.driver.name} {result.driver.surname}
                  </TableCell>
                  <TableCell className="text-center">
                    {result.driver.number}
                  </TableCell>
                  <TableCell className="text-center">
                    {result.team.teamName
                      .replace(/\b(Formula 1 Team|F1 Team)\b/g, "")
                      .trim()}
                  </TableCell>
                  <TableCell className="text-center">{result.points}</TableCell>
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
