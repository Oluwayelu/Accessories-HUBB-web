import {GET_PRODUCT, PRODUCT_LOADING} from '../actions/types'

const initialState = {
    products: [],
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        case PRODUCT_LOADING:
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }
}