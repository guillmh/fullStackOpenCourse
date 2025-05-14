import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/personForm";
import Filter from "./components/Filter";
import axios from "axios";

const App = () => {
  //Maneja el estado para guardar nuevos numeros
  const [persons, setPersons] = useState([]);

  //Hace una solicitud al servidor para obtener los datos
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  //Un solo state para varios inputs
  const [formData, setFormData] = useState({
    newName: "",
    newNumber: "",
    searchName: "",
  });

  //controla el estado de los input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        searchName={formData.searchName}
        handleChange={handleChange}
        persons={persons}
      />
      <h3>Add a new</h3>
      <PersonForm
        newName={formData.newName}
        newNumber={formData.newNumber}
        handleChange={handleChange}
        persons={persons}
        setPersons={setPersons}
        setFormData={setFormData}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
