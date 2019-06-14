import axios from 'axios';

export const fetchImages = ()=>{
  return axios.get('https://jsonplaceholder.typicode.com/photos');
}