import { useParams, useSearchParams } from "react-router-dom";

export default function CityDetails() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log("hghghgh");
  const langitude = searchParams.get("lng");
  const latitude = searchParams.get("lat");
  // console.log(langitude, latitude);

  return (
    <>
      <div className="text-center p-[20px] mt-[20px]">
        <h1 className="text-white text-[20px] font-bold"> Positions : {id} </h1>
        <div className="text-white">langitude : {langitude}</div>
        <div className="text-white">latitude : {latitude}</div>
      </div>
    </>
  );
}
