import React from "react";
import ButtonDelete from "./buttonDelete";

const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
          <ButtonDelete person={person} />
        </div>
      ))}
    </div>
  );
};

export default Persons;
