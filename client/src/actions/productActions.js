import axios from 'axios'
import { GET_PRODUCT, PRODUCT_LOADING } from './types'

export const getProduct = () => dispatch => {
    dispatch(productLoading())
    axios
        .get('http://localhost:8000/products')
        .then(res => 
            dispatch({
                type: GET_PRODUCT,
                payload: res.data
            })
        )
}

export const productLoading = () => {
    return {
        type: PRODUCT_LOADING
    }
}