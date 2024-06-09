import { Outlet } from "react-router-dom";
import AppNavabr from "../components/Layout/AppNavabr";

export default function AppLayouts() {
  return (
    <>
      <div className="flex h-[100vh]">
        <div className="bg-[#1d7770] w-[600px] p-5">
          <AppNavabr />
          <Outlet />
        </div>
        <div></div>
      </div>
    </>
  );
}
