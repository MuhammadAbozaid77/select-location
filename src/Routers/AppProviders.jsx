import CitiesProvider from "../context/CitiesContext";
import AppNavigations from "./AppNavigations";

export default function AppProviders() {
  return (
    <>
      <CitiesProvider>
        <AppNavigations />
      </CitiesProvider>
    </>
  );
}
