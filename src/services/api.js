import axios from 'axios'

const api = axios.create({
    baseUrl: `https://carlosziegler.now.sh/api/fashionista`
})

export default api