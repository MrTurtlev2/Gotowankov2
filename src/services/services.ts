import axios from 'axios';

const URL = 'https://6123fff0124d880017568573.mockapi.io'

export const getRecipes = () => {
    return axios.get(`${URL}/rest`)
}