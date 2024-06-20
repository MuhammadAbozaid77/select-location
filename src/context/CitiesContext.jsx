//
import { createContext, useEffect, useReducer } from "react";
export const CitiesContext = createContext(0);
const initialState = {
  isLoading: false,
  error: "",
  cities: [],
  currentCity: {},
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case "city/loaded":
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };
    case "cities/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case "cities/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities?.filter((el) => el.id !== action.payload),
        currentCity: {},
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("UnKnown Action Type");
  }
}

export default function CitiesProvider({ children }) {
  const Base_URL = "http://localhost:9000";
  const [{ cities, isLoading, error, currentCity }, disPatch] = useReducer(
    reducer,
    initialState
  );

  //
  useEffect(() => {
    async function getCities() {
      disPatch({ type: "loading" });
      try {
        const res = await fetch(`${Base_URL}/cities`);
        const data = await res.json();
        disPatch({ type: "cities/loaded", payload: data });
      } catch (error) {
        disPatch({
          type: "rejected",
          payload: "Theree Is an Error Loading Data",
        });
      }
    }
    getCities();
  }, []);
  //
  async function getCityDetails(id) {
    if (id === currentCity.id) return;
    disPatch({ type: "loading" });
    try {
      const res = await fetch(`${Base_URL}/cities/${id}`);
      const data = await res.json();
      disPatch({ type: "city/loaded", payload: data });
    } catch (error) {
      disPatch({
        type: "rejected",
        payload: "Theree Is an Error During Loading City Details",
      });
    }
  }
  //
  async function createNewCity(newCity) {
    disPatch({ type: "loading" });
    try {
      const res = await fetch(`${Base_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      disPatch({
        type: "cities/created",
        payload: data,
      });
    } catch (error) {
      disPatch({
        type: "rejected",
        payload: "Theree Is an Error Creating City",
      });
    }
  }

  // /* ---------------------  Deleting City -----------------*/
  async function handelDeleteCity(cityId) {
    disPatch({ type: "loading" });
    try {
      await fetch(`${Base_URL}/cities/${cityId}`, {
        method: "DELETE",
      });
      // const newFilteredCities = ;
      disPatch({ type: "cities/deleted", payload: cityId });
    } catch (error) {
      disPatch({
        type: "rejected",
        payload: "Theree Is an Error During Deleting City",
      });
    }
  }

  //
  return (
    <CitiesContext.Provider
      value={{
        isLoading,
        error,
        cities,
        currentCity,
        getCityDetails,
        createNewCity,
        handelDeleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
