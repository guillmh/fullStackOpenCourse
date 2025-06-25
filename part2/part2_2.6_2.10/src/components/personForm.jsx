import React from "react";
import personsServices from "../services/personsSV";
import { Flex, Heading, Text, TextField, Button } from "@radix-ui/themes";
import { PersonIcon, MobileIcon, PlusIcon } from "@radix-ui/react-icons";

const PersonForm = ({
  newName,
  newNumber,
  handleChange,
  persons,
  setPersons,
  setFormData,
  setSuccesMessage,
  setNotification,
}) => {
  //Agrega un nuevo nombre al estado
  const addPerson = (e) => {
    e.preventDefault();
    //Verifica si el nombre ya existe en el array
    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    // Si existe, pregunta si se desea actualizar el número
    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already  added to phonebook, replace the old number with a new one?`
        )
      ) {
        // Actualiza el número del contacto existente
        const updatedPerson = { ...existingPerson, number: newNumber };
        personsServices
          .updatePerson(existingPerson.id, updatedPerson)
          .then((returnedPerson) => {
            // Actualiza el estado local con el contacto actualizado
            setPersons(
              persons.map((p) =>
                p.id !== existingPerson.id ? p : returnedPerson
              )
            );
            // Limpia los campos del formulario
            setFormData((prev) => ({
              ...prev,
              newName: "",
              newNumber: "",
            }));
            // Muestra mensaje de éxito
            setSuccesMessage(
              `The contact was ${returnedPerson.name} updated successfully.`
            );
            //Agrega el estilo update
            setNotification("update");
            // Oculta el mensaje después de unos segundos
            setTimeout(() => setSuccesMessage(null), 5000);
          })
          .catch((error) => {
            alert("Error updating contact");
            throw error;
          });
      }
      return;
    }
    // Si no existe, crea un nuevo contacto
    const addData = { name: newName, number: newNumber };
    personsServices.create(addData).then((response) => {
      const savedPerson = response;
      // Agrega el nuevo contacto al estado local
      setPersons(persons.concat(savedPerson));
      //Muestra una notificacionde operacion exitosa
      setSuccesMessage(`Added ${response.name}`);
      //Agrega el estilo success
      setNotification("success");
      // Oculta el mensaje después de unos segundos
      setTimeout(() => setSuccesMessage(null), 5000);
      // Limpia los campos del formulario
      setFormData((prev) => ({ ...prev, newName: "", newNumber: "" }));
    });
  };

  return (
    <Flex gap="3" direction={"column"} m={"2"} p={"2"}>
      <Heading as="h2" size={"4"} weight={"medium"}>
        Add New Contact
      </Heading>
      <form onSubmit={addPerson}>
        <Flex gap={"2"} direction={"column"}>
          <Text>Name</Text>
          <TextField.Root
            name="newName"
            value={newName}
            onChange={handleChange}
            placeholder="write your name"
            required
          >
            <TextField.Slot>
              <PersonIcon height="18" width="18" />
            </TextField.Slot>
          </TextField.Root>
        </Flex>
        <Flex gap={"3"} direction={"column"} mt="3">
          <Text>Number</Text>
          <TextField.Root
            name="newNumber"
            value={newNumber}
            onChange={handleChange}
            placeholder="write your number"
            required
          >
            <TextField.Slot>
              <MobileIcon height="18" width="18" />
            </TextField.Slot>
          </TextField.Root>
        </Flex>
        <Flex justify={"end"} mt="3" gap={"3"}>
          <Button type="submit" variant="soft" highContrast="true">
            <PlusIcon />
            add
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default PersonForm;
