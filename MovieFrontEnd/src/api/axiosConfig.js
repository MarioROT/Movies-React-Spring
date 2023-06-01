import axios from 'axios';

export default axios.create({
    baseURL: 'https://da56-2806-107e-10-55d9-56bf-64ff-fe49-a7f1.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning":"true"}
    //baseURL: 'https://localhost:8080',
})