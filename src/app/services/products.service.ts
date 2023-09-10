import { Product } from "../models/index";
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com'

axios.defaults.baseURL = API_URL


export const ProductService = {
    async getProducts() {
        const { data } = await axios.get<Product[]>('/products')
        return data
    },

    async getCategories() {
        const { data } = await axios.get<string[]>('/products/categories')
        return data
    },

    async getProduct(id: number) {
        const { data } = await axios.get<Product[]>('/products/'+id)
        return data
    },

    async getById(id: number) {
        const { data } = await axios.get<Product[]>('/products', {
            params: {
                id
            }
        })
        return data
    },

}