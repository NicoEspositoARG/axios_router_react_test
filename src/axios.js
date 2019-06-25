import axios from 'axios';

// this overrides the global config on axios package
// you could use interceptors here too
const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});
instance.defaults.headers['Authorization'] = 'AUTH TOKEN FROM ISNTANCE';


export default instance;

