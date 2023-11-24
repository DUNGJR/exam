import axios from 'axios';

const url= "http://localhost:3001/user"

export const fetchUser = () => axios.get(url);