import { useMap } from "react-leaflet";

export default function ChangeMapPosition({ position }) {
  const mapHook = useMap();
  mapHook.setView(position);
  return null;
}
