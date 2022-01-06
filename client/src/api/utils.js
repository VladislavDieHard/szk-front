import axios from 'axios'

const service = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URI
})

export default service