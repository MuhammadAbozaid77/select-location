import { useSearchParams } from "react-router-dom";

//
export default function useUrlPosition() {
  //
  const [searchParams] = useSearchParams();
  const MapLatitude = searchParams.get("lat");
  const MapLangitude = searchParams.get("lng");
  //
  return [MapLatitude, MapLangitude];
}
