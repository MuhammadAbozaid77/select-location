import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import useCities from "../../hooks/useCities";

export default function CityCard({ item }) {
  // console.log(item);
  const { currentCity, handelDeleteCity } = useCities();

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

  const { id, position, cityName, emoji, date } = item;

  const handelDelete = (e) => {
    e.preventDefault();
    handelDeleteCity(id);
  };
  //
  return (
    <>
      <Link to={`${id}?lat=${position?.lat}&lng=${position?.lng}`} className="">
        <div
          className={`h-[60px]  rounded-[5px] flex justify-between items-center px-3 mb-2 bg-black/50 ${
            currentCity.id === id ? "border-green-500 border-[3px]" : "border"
          } `}
        >
          <div className="flex  justify-start items-center">
            <div className=" text-white">{cityName}</div>
            <div className=" text-white w-[50px] text-[15px] mx-2">
              [{emoji}]
            </div>
          </div>
          <div className=" text-white w-[150px]">{formatDate(date)}</div>
          <div
            onClick={handelDelete}
            className="w-[30px] h-[30px] rounded-full bg-red-900 hover:bg-red-700 duration-150 text-white flex justify-center items-center text-[15px] font-semibold cursor-pointer"
          >
            <IoClose size={20} />
          </div>
        </div>
      </Link>
    </>
  );
}
