import axios from "axios";
/* Usamos o axios para criar uma referência de endereço da API/Serviçor (chamada de baseURL) */
const Api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default Api;
