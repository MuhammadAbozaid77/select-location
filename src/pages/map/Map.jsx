import Button from "../../components/Ui/Button";
import { ImLocation2 } from "react-icons/im";
import SpinnerLoading from "../../components/Ui/spinnerLoading/SpinnerLoading";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";
import useCities from "../../hooks/useCities";
import { useGeolocation } from "../../hooks/useGeoLoaction";
import useUrlPosition from "../../hooks/useUrlPosition";
import NewMapPosition from "./NewMapPosition";
import ChangeMapPosition from "./ChangeMapPosition";

export default function Map() {
  const { cities } = useCities();
  const { isLoading, positionGeoLocation, error, getPosition } =
    useGeolocation();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [MapLatitude, MapLangitude] = useUrlPosition();
  /* ---------------------------------- Component Effects --------------------------------- */
  /* ------ Select Your loaction on Click ----------- */
  useEffect(() => {
    if (MapLatitude && MapLangitude) {
      setMapPosition([MapLatitude, MapLangitude]);
    }
  }, [MapLatitude, MapLangitude]);
  /* ------ Select Your loaction on Button (Main Location of developer) ----------- */
  useEffect(() => {
    if (positionGeoLocation) {
      setMapPosition([positionGeoLocation.lat, positionGeoLocation.lng]);
    }
  }, [positionGeoLocation]);

  /* ---------------------------------- Component Return --------------------------------- */
  return (
    <>
      <div
        className="text-center p-[10px] h-[100%] bg-[#0c312e] rounded-md relative"
        // onClick={() => navigate("form")}
      >
        {!positionGeoLocation && (
          <Button
            type="position"
            icon={<ImLocation2 size={25} />}
            myStyle={
              "absolute bottom-[6%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-800 mb-5 z-[1500] min-w-[300px] text-center"
            }
            onClick={getPosition}
          >
            {isLoading ? <SpinnerLoading /> : "Select Current Location"}
          </Button>
        )}

        <MapContainer
          center={mapPosition}
          // center={[MapLatitude, MapLangitude]}
          zoom={6}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          {cities?.map((el, index) => (
            <Marker position={[el.position.lat, el.position.lng]} key={index}>
              <Popup>
                <span>{el.emoji}</span>
                <span>{el.cityName}</span>
              </Popup>
            </Marker>
          ))}

          {/* Show The Current Position on Map---------------------------------------------- */}
          <ChangeMapPosition position={mapPosition} />
          {/* Component Which are change on Map---------------------------------------------- */}
          <NewMapPosition />
        </MapContainer>
      </div>
    </>
  );
}
