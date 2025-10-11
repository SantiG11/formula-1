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

  console.log(circuit);

  if (loading) return <p>Loading circuit details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <SectionContainer>
      <SectionTitle>{circuit?.circuitName}</SectionTitle>

      <div className="flex gap-4 bg-secondary border-2 rounded-2xl overflow-hidden py-5">
        <div>
          <img
            src={assetUrl || ""}
            alt={circuit?.circuitId}
            className="flex justify-center items-center border-2 border-accent aspect-auto h-[300px]"
          />
        </div>
        <div className="flex flex-col gap-5 justify-start p-2">
          <p>Lenght: {circuit?.circuitLength}</p>
          <p>Country: {circuit?.country}</p>
          <p>City: {circuit?.city}</p>
          <p>Record: {circuit?.lapRecord}</p>
          <p>First participation: {circuit?.firstParticipationYear}</p>
        </div>
      </div>
    </SectionContainer>
  );
}
