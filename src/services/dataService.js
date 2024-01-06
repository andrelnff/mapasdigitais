import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
});

export async function fetchData(dataset) {
    try {
        const response = await api.get(`/data/${dataset}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${dataset}: `, error);
        return null;
    }
}