import NoData from "../../components/Ui/NoData";
import SpinnerLoading from "../../components/Ui/spinnerLoading/SpinnerLoading";
import CountryCard from "../../components/cards/CountryCard";
import useCities from "../../hooks/useCities";

export default function Countries() {
  const { isLoading, cities } = useCities();

  if (isLoading) {
    return (
      <>
        <div className="flex justify-center items-center">
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
  const countries = cities?.reduce(
    (arr, current) => {
      if (!arr?.map((el) => el.country).includes(current.country)) {
        return [...arr, { country: current.country, emoji: current.emoji }];
      } else {
        return arr;
      }
    },

    []
  );

  return (
    <>
      <div className="p-[20px] mt-[20px] grid grid-cols-2 gap-2">
        {countries?.map((item, index) => (
          <CountryCard key={index} item={item} />
        ))}
      </div>
    </>
  );
}
