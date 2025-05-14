import React from "react";

const Filter = ({ searchName, handleChange, persons }) => {
  //Busca un si existe el nombre en el array de personas
  const searchPerson = searchName
    ? persons.find(
        (person) => person.name.toLowerCase() === searchName.toLowerCase()
      )
    : null;

  return (
    <div>
      <div>
        filter shown with:{" "}
        <input
          name="searchName"
          value={searchName}
          onChange={handleChange}
          type="text"
        />
        {searchName && (
          <div>
            {searchPerson ? (
              <p>
                Nombre: {searchPerson.name}, Número: {searchPerson.number}
              </p>
            ) : (
              <p>{searchName} no fue encontrado.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
