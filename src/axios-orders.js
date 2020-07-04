import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-69c9b.firebaseio.com/'
})

export default instance;