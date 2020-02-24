import axios from 'axios'
import { GET_CATEGORY, GET_CATEGORY_PRODUCT, CATEGORY_LOADING } from './types'

export const getCategory = () => dispatch => {
    dispatch(categoryLoading())
    axios
        .get('http://localhost:8000/categories')
        .then(res => 
            dispatch({
                type: GET_CATEGORY,
                payload: res.data
            })
        )
}

export const getCategoryProducts = id => dispatch => {
    axios
        .get(`http://localhost:8000/categories/product/${id}`)
        .then(res =>
            dispatch({
                type: GET_CATEGORY_PRODUCT,
                payload: id
            })    
        )
}

export const categoryLoading = () => {
    return {
        type: CATEGORY_LOADING
    }
}