import React from "react";
import ButtonDelete from "./ButtonDelete";

const Persons = ({ persons, setPersons }) => {
  return (
    <div>
      {persons.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
          <ButtonDelete
            person={person}
            persons={persons}
            setPersons={setPersons}
          />
        </div>
      ))}
    </div>
  );
};

export default Persons;
