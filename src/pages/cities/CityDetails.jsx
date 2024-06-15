import { useParams } from "react-router-dom";
import useCities from "../../hooks/useCities";
import { useEffect } from "react";
import SpinnerLoading from "../../components/Ui/spinnerLoading/SpinnerLoading";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

export default function CityDetails() {
  const { id } = useParams();
  const { currentCity, getCityDetails, isLoading } = useCities();

  const { cityName, emoji, date, notes } = currentCity;

  //
  useEffect(() => {
    getCityDetails(id);
  }, [id]);

  if (isLoading) {
    return (
      <>
        <div className="flex justify-center items-center p-5">
          <SpinnerLoading />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="text-white p-5">
        <div className="flex justify-start items-center mb-2">
          <h6 className="me-2">City name</h6>
          <h3 className="text-yellow-500">
            <span>{emoji}</span> {cityName}
          </h3>
        </div>
        <div className="flex justify-start items-center mb-2">
          <h6 className="me-2">You went to {cityName} on</h6>
          <p className="text-yellow-500">{formatDate(date || null)}</p>
        </div>

        {notes && (
          <div className="flex justify-start items-center mb-2">
            <h6 className="me-2">Your notes</h6>
            <p className="text-green-500">{notes}</p>
          </div>
        )}

        <div className="flex justify-start items-center mb-2">
          <h6 className="me-2">Learn more</h6>
          <a
            href={`https://en.wikipedia.org/wiki/${cityName}`}
            target="_blank"
            rel="noreferrer"
            className="text-red-500"
          >
            Check out {cityName} on Wikipedia &rarr;
          </a>
        </div>
      </div>
    </>
  );
}
