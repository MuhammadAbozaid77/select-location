import { Outlet } from "react-router-dom";
import AppNavabr from "../components/Layout/AppNavabr";
import Map from "../pages/map/Map";

export default function AppLayouts() {
  return (
    <>
      <div className="flex h-[100vh] md:flex-row flex-col">
        <div className="bg-[#0c312e] w-[100%] h-[100%] p-5">
          <AppNavabr />
          <Outlet />
        </div>
        <div className="border w-[100%] h-[100%]  p-5">
          <div className="bg-slate-300 rounded-[10px] border-green-600  shadow-lg h-[100%]">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
}
