import { useState } from "react";
import ShowInfo from "./ShowInfo";

const CountriesList = ({ filteredCountries }) => {
  //Maneja el estado del pasi seleccionado
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleShow = (country) => {
    setSelectedCountry(country);
  };

  //Funcion para manejar un renderizado condicional en
  const renderContent = () => {
    //Condicion para mostrar un mensaje en caso de ser mas de 10 en la lista
    if (filteredCountries.length > 11) {
      return <p>Too many matches, specify another filter</p>;
    }
    //Condicion para renderizar los detalles de un pasi en caso de ser solo uno
    if (filteredCountries.length === 1) {
      return (
        <div>
          <h2>{filteredCountries[0].name.common}</h2>
          <p>Capital: {filteredCountries[0].capital}</p>
          <p>Área: {filteredCountries[0].area} km²</p>
          <h2>Languages</h2>
          <ul>
            {/* //Convierte el objeto de lenguajes en un array clave: valor y mapea los datos */}
            {Object.entries(filteredCountries[0].languages).map(
              ([clave, valor]) => (
                <li key={clave}>{valor}</li>
              )
            )}
          </ul>
          <img src={filteredCountries[0].flags.png} alt="" />
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
          </div>
        )}
      </>
    );
  };

  return <div>{renderContent()}</div>;
};

export default CountriesList;
