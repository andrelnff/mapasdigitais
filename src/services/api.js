
import axios from "axios";

const api = axios.create({
    // baseURL: "http://192.168.0.200:8000/",
    baseURL: "https://mapasdigitais.bitsebytes.net/api/v3/",
  });

  export default api