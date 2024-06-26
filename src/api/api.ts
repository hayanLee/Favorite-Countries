import axios from 'axios';

const ENDPOINT = 'https://restcountries.com/v3.1/all';
export async function getCountries() {
    const res = await axios.get(ENDPOINT);
    const data = await res.data;
    return data;
}
