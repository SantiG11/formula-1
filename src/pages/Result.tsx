import RaceResultContainer from "@/components/sections/RaceResultContainer";

import { useParams } from "react-router-dom";

export default function ResultPage() {
  const { resultId } = useParams();

  return <RaceResultContainer round={resultId ? parseInt(resultId) : null} />;
}
