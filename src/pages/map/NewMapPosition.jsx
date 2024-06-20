import { useNavigate } from "react-router-dom";
import { useMapEvent } from "react-leaflet";

export default function NewMapPosition() {
  const navigate = useNavigate();

  useMapEvent({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
