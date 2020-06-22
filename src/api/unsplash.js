import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID EuxP16GCSU60HrEQO4Sf8EyecF36ooox_ocs273W_e8",
  },
});
