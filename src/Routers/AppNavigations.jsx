import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayouts from "./AppLayouts";
import PageNotFound from "./../components/Ui/PageNotFound";
import Home from "./../pages/home/Home";
import Product from "./../pages/product/Product";
import Pricing from "./../pages/pricing/Pricing";
import Login from "./../pages/login/Login";
import Cities from "./../pages/cities/Cities";
import CityDetails from "./../pages/cities/CityDetails";
import Countries from "./../pages/countries/Countries";
import CityFrom from "../pages/form/CityFrom";

export default function AppNavigations() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* ------------------------- */}
          <Route path="app" element={<AppLayouts />}>
            <Route index element={<Navigate replace to={"cities"} />} />
            <Route path="cities" element={<Cities />} />
            <Route path="cities/:id" element={<CityDetails />} />
            <Route path="countries" element={<Countries />} />
            <Route path="form" element={<CityFrom />} />
          </Route>
          {/* ------------------------- */}
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          {/*--- Not Found ---*/}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
