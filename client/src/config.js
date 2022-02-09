import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://ecommerce-backend--api.herokuapp.com/api/",
})