import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
export default function AppNavabr() {
  return (
    <>
      <div className="p-2 flex justify-between items-center navbarLinks flex-col">
        <div className="flex justify-center items-center mb-5">
          <img src={logo} alt="" className="w-[80px] rounded-lg" />
        </div>
        <div className="flex justify-center">
          <ul className="flex justify-center items-center border rounded bg-[#1d756e] w-fit">
            <li className="flex justify-center items-center text-gray-300  w-[80px] rounded">
              <NavLink className="px-5 py-2" to={"cities"}>
                Cities
              </NavLink>
            </li>
            <li className="flex justify-center items-center text-gray-300  w-[80px] rounded">
              <NavLink className="px-5 py-2" to={"countries"}>
                Countries
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
