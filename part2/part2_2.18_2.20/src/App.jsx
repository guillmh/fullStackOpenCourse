import { useEffect, useState } from "react";
import countrieService from "./services/countriesData";
import InputData from "./components/InputData";
import CountriesList from "./components/CountriesList";

function App() {
  //Maneja el estado de los datos de paises
  const [countries, setCountries] = useState([]);
  //Maneja Estado para los datros filtrados
  const [filteredCountries, setFilteredCountries] = useState([]);
  //Estado para manejar el valor del input
  const [inputValue, setInputValue] = useState("");

  //Se ejecuta una sola vez para obtener todos los paises
  useEffect(() => {
    countrieService.getCountries().then((response) => {
      setCountries(response);
    });
  }, []);

  //Filtra los datos que coincidadn con la entrada del input, y se ejecuta cada vez que el valor del input cambia
  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  }, [inputValue, countries]);

  //Actualiza el estado con lo que escribe el usuario
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div>
        <div>
          <InputData inputValue={inputValue} handleChange={handleChange} />
        </div>
        <CountriesList filteredCountries={filteredCountries} />
      </div>
    </>
  );
}

export default App;
