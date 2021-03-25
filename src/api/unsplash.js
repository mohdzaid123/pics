import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client_ID gwJKz3AWOuPZCxI496pXif1jHrhkPNyarGP7xQVTLco",
  },
});
