import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import personsServices from "./services/personsSV";
import Notification from "./components/Notification";

const App = () => {
  //Maneja el estado para guardar nuevos numeros
  const [persons, setPersons] = useState([]);
  //Maneja el estado del mensaje exitoso
  const [sucessMessage, setSuccesMessage] = useState(null);
  //Maneja el estado de la notificacion
  const [notificationType, setNotification] = useState("success");

  //Hace una solicitud al servidor para obtener los datos
  useEffect(() => {
    personsServices.getAll().then((response) => {
      setPersons(response);
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
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={sucessMessage} type={notificationType} />
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
        setSuccesMessage={setSuccesMessage}
        setNotification={setNotification}
      />
      <h3>Numbers</h3>
      <Persons
        persons={persons}
        setPersons={setPersons}
        setSuccesMessage={setSuccesMessage}
        setNotification={setNotification}
      />
    </div>
  );
};

export default App;
