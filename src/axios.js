import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:5001/challange-24111/us-central1/api'
});

export default instance