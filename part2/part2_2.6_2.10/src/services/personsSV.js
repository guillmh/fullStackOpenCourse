import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const create = async (newPerson) => {
  try {
    const response = await axios.post(baseUrl, newPerson);
    return response.data;
  } catch (error) {
    console.error("Error sending data:", error);
  }
};

export default { getAll, create };
