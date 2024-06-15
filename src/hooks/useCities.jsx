import { useContext } from "react";
import { CitiesContext } from "../context/CitiesContext";

export default function useCities() {
  const Context = useContext(CitiesContext);

  if (Context === undefined) {
    throw new Error("Cities Using Outside Context");
  }
  return Context;
}
