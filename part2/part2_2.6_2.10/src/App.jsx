import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import personsServices from "./services/personsSV";
import Notification from "./components/Notification";
import { Container, Heading, Card } from "@radix-ui/themes";

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
    <>
      <Container size={"1"} height={"100%"} p={"3"} m={"5"}>
        <Heading as="h1" weight={"bold"} size={"8"} align={"center"}>
          PhoneBook
        </Heading>
        <Notification message={sucessMessage} type={notificationType} />
        <Card>
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
        </Card>
        <Card>
          <Filter
            searchName={formData.searchName}
            handleChange={handleChange}
            persons={persons}
          />
        </Card>
        <Card>
          <Persons
            persons={persons}
            setPersons={setPersons}
            setSuccesMessage={setSuccesMessage}
            setNotification={setNotification}
          />
        </Card>
      </Container>
    </>
  );
};

export default App;
