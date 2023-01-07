import axios from 'axios';

const myAxios = axios.create({
    baseURL: `http://localhost:${process.env.PORT ?? 3008}/api`,
});

export default myAxios;
