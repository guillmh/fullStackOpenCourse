import { useState } from "react";

const App = () => {
  //Un solo state para varios inputs
  const [formData, setFormData] = useState({
    newName: "",
    newNumber: "",
    searchName: "",
  });
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  //controla el estado de los input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.value);
  };

  //Agrega un nuevo nombre al estado
  const addPerson = (e) => {
    e.preventDefault();
    //Verifica si el nombre ya existe en el array
    const nameExists = persons.some(
      (person) => person.name === formData.newName
    );
    //Condicion en caso de que sea true la existencia de un nombre igual
    if (nameExists) {
      alert(`${formData.newName} is already added to phonebook`);
      return;
    }
    const addData = { name: formData.newName, number: formData.newNumber };
    setPersons(persons.concat(addData));
    setFormData({ ...formData, newName: "", newNumber: "" });
  };

  const searchPerson = formData.searchName
    ? persons.find(
        (person) =>
          person.name.toLowerCase() === formData.searchName.toLowerCase()
      )
    : null;

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with:{" "}
        <input
          name="searchName"
          value={formData.searchName}
          onChange={handleChange}
          type="text"
        />
        {formData.searchName && (
          <div>
            {searchPerson ? (
              <p>
                Nombre: {searchPerson.name}, Número: {searchPerson.number}
              </p>
            ) : (
              <p>{formData.searchName} no fue encontrado.</p>
            )}
          </div>
        )}
      </div>
      <h3>Add a new</h3>
      <form onSubmit={addPerson}>
        <div>
          name:{" "}
          <input
            name="newName"
            value={formData.newName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          number:{" "}
          <input
            name="newNumber"
            value={formData.newNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <div>
        {persons.map((person, i) => (
          <p key={i}>
            {person.name} {person.number}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
