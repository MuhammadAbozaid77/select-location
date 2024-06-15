import { useState } from "react";
import Button from "../../components/Ui/Button";
import { FaPlus } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

//

// export function convertToEmoji(countryCode) {
//   const codePoints = countryCode
//     .toUpperCase()
//     .split("")
//     .map((char) => 127397 + char.charCodeAt());
//   return String.fromCodePoint(...codePoints);
// }

export default function CityFrom() {
  const navigate = useNavigate();
  const [cityName, setCityName] = useState("");
  // const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");

  //

  return (
    <>
      <div className="">
        <form className="bg-black/50 px-5 py-[30px] rounded-[5px] border">
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
            {/* <span className={styles.flag}>{emoji}</span> */}
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="date" className="font-semibold text-gray-300">
              When did you go to {cityName}?
            </label>
            <input
              className="border p-2 rounded-[5px]"
              id="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
            {/* <span className={styles.flag}>{emoji}</span> */}
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

            {/* <span className={styles.flag}>{emoji}</span> */}
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
              myStyle={"bg-green-800 hover:bg-green-900 duration-150"}
              icon={<FaPlus size={20} />}
              onClick={(e) => {
                e.preventDefault();
                navigate(+1);
              }}
            >
              Add
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
