import React from "react";

const CountriesList = ({ filteredCountries }) => {
  return (
    <div>
      <div>
        {filteredCountries.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : (
          filteredCountries.map((c) => <div key={c.cca3}>{c.name.common}</div>)
        )}
      </div>
    </div>
  );
};

export default CountriesList;
