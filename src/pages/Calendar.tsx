import RaceInfoCard from "@/components/sections/RaceInfoCard";
import Grid from "@/components/shared/Grid";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionTitle from "@/components/shared/SectionTitle";
import { Calendar } from "@/components/ui/calendar";
import useGetData from "@/hooks/useGetData";
import type { CalendarInfoApiResponse } from "@/lib/types";
import { useNavigate } from "react-router-dom";

export default function CalendarPage() {
  const navigate = useNavigate();

  const {
    data: raceSchedule,
    loading,
    error,
  } = useGetData<CalendarInfoApiResponse>("/2025");

  const handleDayClick = (day: Date) => {
    const toUTCYMD = (d: Date) => {
      const y = d.getUTCFullYear();
      const m = String(d.getUTCMonth() + 1).padStart(2, "0");
      const dd = String(d.getUTCDate()).padStart(2, "0");
      return `${y}-${m}-${dd}`;
    };

    function navigateHandler(round: number) {
      navigate(`/calendar/${round}`);
    }

    const raceDates =
      raceSchedule?.races?.map((r) => r.schedule.race.date) ?? [];
    const raceDateSet = new Set(raceDates);

    const dayYMD = toUTCYMD(day);

    if (raceDateSet.has(dayYMD)) {
      const race = raceSchedule?.races?.find(
        (r) => r.schedule.race.date === dayYMD,
      );

      if (race) {
        console.log(`Redirigiendo a la carrera: ${race.raceName}`);
        navigateHandler(race.round);
      }
    } else {
      console.log("No es una fecha de carrera.");
    }
  };

  const dates =
    raceSchedule?.races?.map((race) => {
      const [year, month, day] = race.schedule.race.date.split("-").map(Number);

      return new Date(Date.UTC(year, month - 1, day + 1));
    }) ?? [];

  if (loading) {
    return (
      <SectionContainer>
        <SectionTitle>Calendar</SectionTitle>
        <p>Loading calendar...</p>
      </SectionContainer>
    );
  }

  if (error) {
    return (
      <SectionContainer>
        <SectionTitle>Calendar</SectionTitle>
        <p>Error fetching data.</p>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer>
      <SectionTitle>Calendar</SectionTitle>

      <Calendar
        mode="multiple"
        selected={dates}
        onDayClick={handleDayClick}
        onSelect={() => {}}
        className="rounded-lg border self-center w-90 md:w-105"
        fixedWeeks
        showOutsideDays={false}
      />

      <Grid>
        {raceSchedule?.races?.map((race) => {
          return <RaceInfoCard {...race} key={race.raceId} />;
        })}
      </Grid>
    </SectionContainer>
  );
}
