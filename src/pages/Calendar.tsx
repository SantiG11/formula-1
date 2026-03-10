import RaceInfoCard from "@/components/sections/RaceInfoCard";
import Grid from "@/components/shared/Grid";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionTitle from "@/components/shared/SectionTitle";
import { Calendar } from "@/components/ui/calendar";
import useGetData from "@/hooks/useGetData";
import type { CalendarInfoApiResponse } from "@/lib/types";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function CalendarPage() {
  const navigate = useNavigate();

  const {
    data: raceSchedule,
    loading,
    error,
  } = useGetData<CalendarInfoApiResponse>("/2026");

  const toRaceInstant = (
    date: string | null,
    time: string | null,
  ): Date | null => {
    if (!date || !time) return null;
    const iso = `${date}T${time}`;
    const d = new Date(iso);
    return Number.isNaN(d.getTime()) ? null : d;
  };

  const toLocalYMD = (d: Date) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${dd}`;
  };

  const { selectedDates, localDayToRound } = useMemo(() => {
    const races = raceSchedule?.races ?? [];

    const map = new Map<string, number>();
    const dates: Date[] = [];

    for (const r of races) {
      const instant = toRaceInstant(r.schedule.race.date, r.schedule.race.time);
      if (!instant) continue;

      const localKey = toLocalYMD(instant);

      const localMidnight = new Date(
        instant.getFullYear(),
        instant.getMonth(),
        instant.getDate(),
      );

      dates.push(localMidnight);

      if (!map.has(localKey)) map.set(localKey, r.round);
    }

    return { selectedDates: dates, localDayToRound: map };
  }, [raceSchedule]);

  const handleDayClick = (day: Date) => {
    const clickedKey = toLocalYMD(day);
    const round = localDayToRound.get(clickedKey);

    if (round != null) {
      navigate(`/calendar/${round}`);
    } else {
      console.log("It's not a race date.");
    }
  };

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
      <SectionTitle>2026 Championship Calendar</SectionTitle>

      <Calendar
        mode="multiple"
        selected={selectedDates}
        onDayClick={handleDayClick}
        onSelect={() => {}}
        className="rounded-lg border self-center w-90 md:w-105 mt-4"
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
