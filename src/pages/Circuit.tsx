import SectionContainer from "@/components/shared/SectionContainer";
import SectionTitle from "@/components/shared/SectionTitle";
import useGetData from "@/hooks/useGetData";
import type { CircuitsInfoApiResponse } from "@/lib/types";
import { getAssetUrl } from "@/utils/getImage";
import { useParams } from "react-router-dom";

export default function CircuitPage() {
  const { circuitId } = useParams();

  const {
    data: circuitsData,
    loading,
    error,
  } = useGetData<CircuitsInfoApiResponse>(`/circuits`);

  const circuit = circuitsData?.circuits.find(
    (circuit) => circuit.circuitId === circuitId,
  );

  const assetUrl = getAssetUrl({
    type: "Circuits",
    id: circuitId,
    extension: "avif",
  });

  if (loading) return <p>Loading circuit details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <SectionContainer>
      <SectionTitle>{circuit?.circuitName}</SectionTitle>

      <div className="flex flex-col  gap-8 border-2 bg-secondary border-secondary rounded-2xl py-5 mb-2">
        <div className="flex  justify-center items-center">
          <img
            src={assetUrl || ""}
            alt={circuit?.circuitId}
            className="object-contain  border-2 border-accent aspect-auto h-full max-h-[300px]"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4 mx-4  p-2">
          <p>
            Lenght:{" "}
            <label className="font-bold">{circuit?.circuitLength}km</label>
          </p>
          <p>
            Country: <label className="font-bold">{circuit?.country}</label>
          </p>
          <p>
            City: <label className="font-bold">{circuit?.city}</label>
          </p>
          <p>
            Record: <label className="font-bold">{circuit?.lapRecord}</label>
          </p>
          <p>
            First participation:{" "}
            <label className="font-bold">
              {circuit?.firstParticipationYear}
            </label>
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
