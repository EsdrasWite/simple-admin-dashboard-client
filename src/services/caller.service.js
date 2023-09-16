import axios from 'axios';

const Axios = axios.create({
    baseURL:'http://localhost:7700'
})

export default Axios;