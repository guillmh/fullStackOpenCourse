import { useState } from 'react'

const App = () => {
  const [newName, setNewName] = useState('');
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  
  //controla el estado del input
  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setNewName(e.target.value)
  };

  //Agrega un nuevo nombre al estado
  const addPerson = (e) => {
     e.preventDefault();

     //Verifica si el nombre ya existe en el array
     const nameExists = persons.some(person => person.name === newName);
     
     //Condicion en caso de que sea true la existencia de un nombre igual
     if (nameExists) {
    alert(`${newName} is already added to phonebook`);
    return;
    }

     const addData = {name: newName};
     setPersons(persons.concat(addData));
     setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person, i) => <p key={i}>{person.name}</p> )}
      </div>
    </div>
  )
}

export default App