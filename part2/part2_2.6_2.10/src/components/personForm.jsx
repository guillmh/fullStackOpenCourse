import React from "react";
import personsServices from "../services/personsSV";

const PersonForm = ({
  newName,
  newNumber,
  handleChange,
  persons,
  setPersons,
  setFormData,
}) => {
  //Agrega un nuevo nombre al estado
  const addPerson = (e) => {
    e.preventDefault();
    //Verifica si el nombre ya existe en el array
    const nameExists = persons.some((person) => person.name === newName);
    //Condicion en caso de que sea true la existencia de un nombre igual
    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const addData = { name: newName, number: newNumber };
    personsServices.create(addData).then((response) => {
      // console.log(response);
      const savedPerson = response;
      setPersons(persons.concat(savedPerson));
      setFormData((prev) => ({ ...prev, newName: "", newNumber: "" }));
    });
  };

  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name:{" "}
          <input
            name="newName"
            value={newName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          number:{" "}
          <input name="newNumber" value={newNumber} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
