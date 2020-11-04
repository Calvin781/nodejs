import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID igld6ExFakx0qc8kcht46aWViuYuBXQNvjgPSqaKgS4' }
})