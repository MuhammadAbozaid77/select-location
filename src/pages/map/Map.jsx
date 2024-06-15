import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../components/Ui/Button";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState } from "react";

export default function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  // console.log("hghghgh");
  const langitude = searchParams.get("lng");
  const latitude = searchParams.get("lat");
  // console.log(langitude, latitude);

  const handelChangePosition = () => {
    setSearchParams({ lng: 30, lat: 25 });
  };
  return (
    <>
      <div
        className="text-center p-[10px] h-[100%] bg-[#0c312e] rounded-md"
        // onClick={() => navigate("form")}
      >
        {/* <h1 className="text-white text-[20px] font-bold"> Positions : {id} </h1> */}
        {/* <div className="text-black">langitude : {langitude}</div>
        <div className="text-black">latitude : {latitude}</div>

        <Button
          myStyle={"hover:bg-green-800  bg-green-700 "}
          onClick={handelChangePosition}
        >
          Select Position
        </Button> */}

        <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Marker position={mapPosition}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}
