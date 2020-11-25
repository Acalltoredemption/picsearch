import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID -lMTV76hUCLc96iFWrpndY58hIr1Zt1AHbZftjVt-bc'
    }
});