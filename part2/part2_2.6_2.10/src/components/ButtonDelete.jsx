import React from "react";
import personsSV from "../services/personsSV";

const ButtonDelete = ({ person, persons, setPersons }) => {
  const handleDelete = async () => {
    if (window.confirm(`Eliminar ${person.name}?`)) {
      try {
        await personsSV.deletePerson(person.id);
        setPersons(persons.filter((p) => p.id !== person.id));
      } catch (error) {
        console.error("Error deleting contact:", error);
      }
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default ButtonDelete;
