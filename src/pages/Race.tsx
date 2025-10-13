import NameLink from "@/components/shared/NameLink";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionTitle from "@/components/shared/SectionTitle";
import useGetData from "@/hooks/useGetData";
import type { RaceInfoApiResponse } from "@/lib/types";
import { getAssetUrl } from "@/utils/getImage";
import { useParams } from "react-router-dom";

export default function RacePage() {
  const { raceId } = useParams();

  const {
    data: raceData,
    loading,
    error,
  } = useGetData<RaceInfoApiResponse>(`/2025/${raceId}`);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const raceDate = new Date(raceData?.race[0].schedule.race.date || "");

  const raceInfo = raceData?.race[0];

  const assetUrl = getAssetUrl({
    type: "Circuits",
    id: raceInfo?.circuit.circuitId,
    extension: "avif",
  });

  if (loading) return <p>Loading race details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <SectionContainer>
      <SectionTitle>{raceInfo?.raceName}</SectionTitle>

      <div className="flex gap-4 bg-secondary border-2 rounded-2xl overflow-hidden py-5">
        <div>
          <img
            src={assetUrl || ""}
            alt={raceInfo?.raceId}
            className="flex justify-center items-center border-2 border-accent aspect-auto h-[300px]"
          />
        </div>
        <div className="flex flex-col gap-5 justify-start p-2">
          <p>Round: {raceInfo?.round}</p>
          <p>Date: {raceInfo?.schedule.race.date}</p>

          <p>Laps: {raceInfo?.laps}</p>
          <p>
            Circuit:
            <NameLink link={`/circuits/${raceInfo?.circuit.circuitId}`}>
              {raceInfo?.circuit.circuitName}
            </NameLink>
          </p>
          <p>
            Location: {raceInfo?.circuit.city} {raceInfo?.circuit.country}{" "}
          </p>
          {raceDate && raceDate < today && (
            <p>
              <NameLink link="">See result</NameLink>
            </p>
          )}
        </div>
      </div>
    </SectionContainer>
  );
}
