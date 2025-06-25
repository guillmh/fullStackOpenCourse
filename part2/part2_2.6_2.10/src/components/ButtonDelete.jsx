import React from "react";
import personsSV from "../services/personsSV";
import { Button } from "@radix-ui/themes";
import { TrashIcon } from "@radix-ui/react-icons";

const ButtonDelete = ({
  person,
  persons,
  setPersons,
  setSuccesMessage,
  setNotification,
}) => {
  const handleDelete = async () => {
    if (window.confirm(`Eliminar ${person.name}?`)) {
      try {
        await personsSV.deletePerson(person.id);
        setPersons(persons.filter((p) => p.id !== person.id));
      } catch {
        setSuccesMessage(
          `Information of ${person.name} has already been removed from server`
        );
        setNotification("error");
        // Oculta el mensaje después de unos segundos
        setTimeout(() => setSuccesMessage(null), 5000);
      }
    }
  };

  return (
    <Button
      onClick={handleDelete}
      variant="soft"
      highContrast="true"
      color="red"
    >
      <TrashIcon />
    </Button>
  );
};

export default ButtonDelete;
