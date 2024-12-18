import axios from "axios";

//npm install json-server
//npx json-server --watch db.json
export const api = axios.create({
    baseURL: "http://localhost:3000",
});
