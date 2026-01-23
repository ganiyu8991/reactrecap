
import axios from "axios";

const api = axios.create({
    baseURL:'https://finalbackendproject.vercel.app', 
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})
export default api;