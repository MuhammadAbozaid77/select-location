import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayouts from "./AppLayouts";
import PageNotFound from "./../components/Ui/PageNotFound";
import Home from "./../pages/home/Home";
import Product from "./../pages/product/Product";
import Pricing from "./../pages/pricing/Pricing";
import Login from "./../pages/login/Login";
import Cities from "./../pages/cities/Cities";
import CityDetails from "./../pages/cities/CityDetails";
import Countries from "./../pages/countries/Countries";
import { useEffect, useState } from "react";
const Base_URL = "http://localhost:9000/cities";

export default function AppNavigations() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //   // -----------------------------------------------------------------------------------
  //   useEffect(() => {
  //     async function getCities() {
  //       try {
  //         setIsLoading(true);
  //         const res = await fetch(`${Base_URL}`);
  //         const data = await res.json();
  //         setCities(data);
  //       } catch (error) {
  //         alert("Theree Is an Error Loading Data");
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     }
  //     getCities();
  //   }, []);
  //   // -----------------------------------------------------------------------------------

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/app" element={<AppLayouts />}>
            <Route
              index
              path="cities"
              element={<Cities isLoading={isLoading} cities={cities} />}
            />
            <Route
              path="cities"
              element={<Cities isLoading={isLoading} cities={cities} />}
            />
            <Route path="cities/:id" element={<CityDetails />} />

            <Route
              path="countries"
              element={<Countries isLoading={isLoading} cities={cities} />}
            />
          </Route>
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
