import { useEffect, useState } from "react";
import Button from "../../components/Ui/Button";
import { FaPlus } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useUrlPosition from "../../hooks/useUrlPosition";
import NoData from "../../components/Ui/NoData";
import SpinnerLoading from "../../components/Ui/spinnerLoading/SpinnerLoading";
import DatePicker from "react-datepicker";
import useCities from "../../hooks/useCities";

//

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export default function CityFrom() {
  const Base_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
  const navigate = useNavigate();
  const [isLoadingGeoLocation, setIsLoadingGeoLocation] = useState(false);
  const [formError, setFormError] = useState("");
  const [cityName, setCityName] = useState("");
  const [formDate, setFormDate] = useState(new Date());
  const [country, setCountry] = useState("");
  const [notes, setNotes] = useState("");
  const [MapLatitude, MapLangitude] = useUrlPosition();
  const [formEmoje, setFormEmoje] = useState("");
  const { createNewCity, isLoading } = useCities();
  // console.log(MapLatitude, MapLangitude);
  useEffect(() => {
    if (!MapLatitude && !MapLangitude) return;
    async function fetchCityData() {
      try {
        setIsLoadingGeoLocation(true);
        setFormError("");
        const res = await fetch(
          `${Base_URL}?latitude=${MapLatitude}&longitude=${MapLangitude}`
        );
        const data = await res.json();
        if (!data.countryCode) {
          throw new Error("Please! Select A City Or Country");
        }
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        setFormEmoje(convertToEmoji(data.countryCode));
        // console.log(data);
      } catch (error) {
        setFormError(error.message);
      } finally {
        setIsLoadingGeoLocation(false);
      }
    }
    fetchCityData();
  }, [MapLatitude, MapLangitude]);

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!cityName || !formDate) return;
    const newCityForm = {
      cityName: cityName,
      country: country,
      emoji: formEmoje,
      date: formDate,
      notes: notes,
      position: {
        lat: MapLatitude,
        lng: MapLangitude,
      },
      id: crypto.randomUUID(),
    };
    // console.log(newCityForm);
    await createNewCity(newCityForm);
    navigate("/app/cities");
  };
  if (!MapLatitude && !MapLangitude) {
    return (
      <div className="bg-black/50 px-5 py-[30px] rounded-[5px] border">
        <NoData message={"Start To Select City On Map"} />
      </div>
    );
  }

  if (isLoadingGeoLocation) {
    return (
      <>
        <div className="bg-black/50 px-5 py-[30px] rounded-[5px] border flex justify-center items-center">
          <SpinnerLoading />
        </div>
        ;
      </>
    );
  }

  if (formError) {
    return (
      <div className="bg-black/50 px-5 py-[30px] rounded-[5px] border">
        <NoData message={formError} />
      </div>
    );
  }
  return (
    <>
      <div className="">
        <form
          className="bg-black/50 px-5 py-[30px] rounded-[5px] border relative"
          onSubmit={handelSubmit}
        >
          {isLoading && (
            <>
              <div className="absolute inset-0 bg-black/80 z-20 flex justify-center items-center">
                <SpinnerLoading />
              </div>
            </>
          )}

          <div className="flex flex-col mb-5">
            <label htmlFor="cityName" className="font-semibold text-gray-300">
              City name
            </label>
            <input
              className="border p-2 rounded-[5px]"
              id="cityName"
              onChange={(e) => setCityName(e.target.value)}
              value={cityName}
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="date" className="font-semibold text-gray-300">
              When did you go to {cityName}?
            </label>
            <DatePicker
              id="date"
              selected={formDate}
              onChange={(date) => setFormDate(date)}
              className="w-[100%] border p-2 rounded-[5px]"
              dateFormat="dd/MM/yyyy"
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="notes" className="font-semibold text-gray-300">
              Notes about your trip to {cityName}
            </label>

            <textarea
              className="border p-2 rounded-[5px]"
              id="notes"
              onChange={(e) => setNotes(e.target.value)}
              value={notes}
            />
          </div>
          <div className="flex justify-between  items-center">
            <Button
              myStyle={"bg-red-800 hover:bg-red-900 duration-150"}
              icon={<FaChevronLeft size={20} />}
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              Back
            </Button>
            <Button
              type={"submit"}
              myStyle={"bg-green-800 hover:bg-green-900 duration-150"}
              icon={<FaPlus size={20} />}
              onClick={() => navigate(+1)}
            >
              Add
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
