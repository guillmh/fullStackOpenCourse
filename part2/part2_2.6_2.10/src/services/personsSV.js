import axios from "axios";

const baseUrl = "http://localhost:3001/persons";
//metodo get para obtener datos del servidor
const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
//metodo para crear un nuevo contacto
const create = async (newPerson) => {
  try {
    const response = await axios.post(baseUrl, newPerson);
    return response.data;
  } catch (error) {
    console.error("Error sending data:", error);
  }
};
//metodo para eleminar un un contacto por id
const deletePerson = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
//Metodo para actualizar un contacto por id
const updatePerson = async (id, updatedPerson) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, updatedPerson);
    return response.data;
  } catch (error) {
    console.log("Error updating data,", error);
    throw error;
  }
};

export default { getAll, create, deletePerson, updatePerson };
