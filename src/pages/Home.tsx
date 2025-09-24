import DriverStandings from "@/components/sections/DriverStandings";
import Hero from "@/components/sections/Hero";
import RaceResultContainer from "@/components/sections/RaceResultContainer";
import TeamStandings from "@/components/sections/TeamStandings";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RaceResultContainer />

      <DriverStandings />
      <TeamStandings />
    </>
  );
}
