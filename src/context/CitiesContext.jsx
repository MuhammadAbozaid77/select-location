//

import { createContext, useEffect, useState } from "react";
export const CitiesContext = createContext(0);

export default function CitiesProvider({ children }) {
  const Base_URL = "http://localhost:9000/cities";

  //
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
  //
  useEffect(() => {
    async function getCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${Base_URL}`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("Theree Is an Error Loading Data");
      } finally {
        setIsLoading(false);
      }
    }
    getCities();
  }, []);
  //
  async function getCityDetails(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${Base_URL}/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      alert("Theree Is an Error Loading Data");
    } finally {
      setIsLoading(false);
    }
  }

  //
  return (
    <CitiesContext.Provider
      value={{
        isLoading,
        cities,
        currentCity,
        getCityDetails,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
