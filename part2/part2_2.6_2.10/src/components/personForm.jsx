import React from "react";
import personsServices from "../services/personsSV";

const PersonForm = ({
  newName,
  newNumber,
  handleChange,
  persons,
  setPersons,
  setFormData,
  setSuccesMessage,
}) => {
  //Agrega un nuevo nombre al estado
  const addPerson = (e) => {
    e.preventDefault();
    //Verifica si el nombre ya existe en el array
    const existingPerson = persons.find((person) => person.name === newName);
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
              `El contacto de ${returnedPerson.name} fue actualizado exitosamente.`
            );
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
      setSuccesMessage(`El contacto ${response.name} se agrego exitosamente`);
      // Oculta el mensaje después de unos segundos
      setTimeout(() => setSuccesMessage(null), 5000);
      // Limpia los campos del formulario
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
