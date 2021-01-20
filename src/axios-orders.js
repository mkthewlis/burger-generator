import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-generator-default-rtdb.firebaseio.com/'
});

export default instance;