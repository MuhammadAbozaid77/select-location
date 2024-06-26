import NoData from "../../components/Ui/NoData";
import SpinnerLoading from "../../components/Ui/spinnerLoading/SpinnerLoading";
import CityCard from "../../components/cards/CityCard";
import useCities from "../../hooks/useCities";

export default function Cities() {
  const { isLoading, cities } = useCities();
  if (isLoading) {
    return (
      <>
        <div className="flex justify-center items-center h-[400px] bg-black/80">
          <SpinnerLoading />
        </div>
      </>
    );
  }

  if (cities?.length === 0) {
    return (
      <>
        <NoData message="Add your first city by clicking on a city on the map" />
      </>
    );
  }
  return (
    <>
      <div className="p-[20px] mt-[20px]">
        {cities?.map((item, index) => (
          <CityCard key={index} item={item} />
        ))}
      </div>
    </>
  );
}
