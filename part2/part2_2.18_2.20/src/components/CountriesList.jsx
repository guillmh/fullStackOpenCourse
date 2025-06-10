import { useState, useEffect } from "react";
import ShowInfo from "./ShowInfo";
import countrieService from "../services/countriesData";

const CountriesList = ({ filteredCountries }) => {
  //Maneja el estado del pasi seleccionado
  const [selectedCountry, setSelectedCountry] = useState(null);
  //Estado para manejar el estado del clima
  const [climate, setClimate] = useState([]);

  const handleShow = (country) => {
    setSelectedCountry(country);
    countrieService.getTime(country.name.common).then((response) => {
      setClimate(response);
    });
  };
  //Ejecuta una sola vez cuando se encuentra un pais en especifico
  useEffect(() => {
    if (filteredCountries.length === 1) {
      const countryName = filteredCountries[0].name.common;
      countrieService.getTime(countryName).then((response) => {
        setClimate(response);
      });
    }
  }, [filteredCountries]);
  //Funcion para manejar un renderizado condicional en
  const renderContent = () => {
    //Condicion para mostrar un mensaje en caso de ser mas de 10 en la lista
    if (filteredCountries.length > 11) {
      return <p>Too many matches, specify another filter</p>;
    }
    //Condicion para renderizar los detalles de un pasi en caso de ser solo uno
    if (filteredCountries.length === 1) {
      const country = filteredCountries[0];
      return (
        <div>
          <h2>{country.name.common}</h2>
          <p>Capital: {country.capital}</p>
          <p>Área: {country.area} km²</p>
          <h2>Languages</h2>
          <ul>
            {Object.entries(country.languages).map(([clave, valor]) => (
              <li key={clave}>{valor}</li>
            ))}
          </ul>
          <img src={country.flags.png} alt="" />
          {/* Mostrar clima si está disponible */}
          {climate.current && (
            <div>
              <h2>Weather in {climate.location.name}</h2>
              <p>
                <strong>Temperature:</strong> {climate.current.temp_c}°C
              </p>
              <img
                src={climate.current.condition.icon}
                alt={climate.current.condition.text}
              />
              <p>
                <strong>Condition:</strong> {climate.current.condition.text}
              </p>
              <p>
                <strong>Wind:</strong> {climate.current.wind_kph} kph
              </p>
            </div>
          )}
        </div>
      );
    }
    //Si no se cumplen las condiciones anteriores retorna una lista menor a 10
    return (
      <>
        {filteredCountries.map((c) => (
          <div
            key={c.cca3}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            {c.name.common}
            {/* El componente recibe un prop onshow el cual recibe la funcion handleShow, al mismo tiempo handle show recibe c que es el pasi mapeado */}
            <ShowInfo onShow={() => handleShow(c)} />
          </div>
        ))}
        {selectedCountry && (
          <div>
            <h2>{selectedCountry.name.common}</h2>
            <p>Capital: {selectedCountry.capital}</p>
            <p>Área: {selectedCountry.area} km²</p>
            <h2>Languages</h2>
            <ul>
              {Object.entries(selectedCountry.languages).map(
                ([clave, valor]) => (
                  <li key={clave}>{valor}</li>
                )
              )}
            </ul>
            <img src={selectedCountry.flags.png} alt="" />
            {/* muestra detalles climaticos del país seleccionado */}
            {climate.current && (
              <div>
                <h2>Weather in {selectedCountry.capital}</h2>
                <p>
                  <strong>Temperature:</strong> {climate.current.temp_c}°C
                </p>
                <img
                  src={climate.current.condition.icon}
                  alt={climate.current.condition.text}
                />
                <p>
                  <strong>Condition:</strong> {climate.current.condition.text}
                </p>
                <p>
                  <strong>Wind:</strong> {climate.current.wind_kph} kph
                </p>
              </div>
            )}
          </div>
        )}
      </>
    );
  };

  return <div>{renderContent()}</div>;
};

export default CountriesList;
