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

export default function RaceResult() {
  return (
    <section>
      <h2>Race Name</h2>
      <p>Race Date</p>
      <div>
        <Table className="w-full">
          <TableCaption>Gulf Air Bahrain Grand Prix 2024</TableCaption>
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
