import axios from "axios";

//Base url para hacer la peticion de datos
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";
//Base url para hacer peticiones a la API de tiempo
const urlTime = import.meta.env.VITE_API_KEY;

const getCountries = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

const getTime = async (countrie) => {
  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${urlTime}&q=${countrie}`
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export default { getCountries, getTime };
