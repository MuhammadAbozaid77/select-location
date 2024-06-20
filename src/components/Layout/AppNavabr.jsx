import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logog4.jpg";
import Button from "../Ui/Button";
import useAuth from "../../hooks/useAuth";
export default function AppNavabr() {
  const navigate = useNavigate();
  const { handelLogOut, user } = useAuth();
  const handelLogOutButton = () => {
    handelLogOut();
    navigate("/");
  };
  return (
    <>
      <div className="p-2 flex justify-between items-center navbarLinks flex-col ">
        <div className="flex justify-between items-center mb-5 w-[100%] bg-black/50 px-5 py-3 rounded-lg">
          <Link to={"/"}>
            <img src={logo} alt="" className="w-[60px] rounded-lg" />
          </Link>
          <div className="flex justify-end items-center">
            <h1 className="mx-2 text-green-600"> Welcome </h1>
            <h1 className="mx-2 text-white"> {user?.name} </h1>
            <Button
              myStyle={"bg-red-700 hover:bg-red-600 duration-150"}
              onClick={handelLogOutButton}
            >
              Logout
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <ul className="flex justify-center items-center rounded-[10px] overflow-hidden bg-black/50 w-fit">
            <li className="flex justify-center items-center text-gray-300  w-[100px] rounded">
              <NavLink className="px-5 py-2" to={"cities"}>
                Cities
              </NavLink>
            </li>
            <li className="flex justify-center items-center text-gray-300  w-[100px] rounded">
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
