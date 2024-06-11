import { Link } from "react-router-dom";

export default function CityCard({ item }) {
  console.log(item);
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

  return (
    <>
      <Link
        to={`${item.id}?lat=${item?.position?.lat}&lng=${item?.position?.lng}`}
      >
        <div className="h-[60px] border  rounded-[5px] flex justify-between items-center px-3 mb-2 bg-black/50">
          <div className="flex  justify-start items-center">
            <div className=" text-white">{item.cityName}</div>
            <div className=" text-white w-[50px] text-[15px] mx-2">
              [{item.emoji}]
            </div>
          </div>
          <div className=" text-white w-[150px]">{formatDate(item.date)}</div>
          <div className="w-[30px] h-[30px] rounded-full bg-red-900 hover:bg-red-700 duration-150 text-white flex justify-center items-center text-[15px] font-semibold cursor-pointer">
            X
          </div>
        </div>
      </Link>
    </>
  );
}
