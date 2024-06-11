import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../components/Ui/Button";

export default function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
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
        className="text-center p-[20px] h-[100%]"
        onClick={() => navigate("form")}
      >
        {/* <h1 className="text-white text-[20px] font-bold"> Positions : {id} </h1> */}
        <div className="text-black">langitude : {langitude}</div>
        <div className="text-black">latitude : {latitude}</div>

        <Button
          myStyle={"hover:bg-green-800  bg-green-700 "}
          onClick={handelChangePosition}
        >
          Select Position
        </Button>
      </div>
    </>
  );
}
