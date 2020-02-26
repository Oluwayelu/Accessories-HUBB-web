import { GET_CATEGORY, GET_CATEGORY_PRODUCT, CATEGORY_LOADING } from "../actions/types"

const initialState = {
    categories: [],
    products: [],
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_CATEGORY:
            return {
                ...state,
                categories: action.payload,
                loading: false
            }
        case GET_CATEGORY_PRODUCT:
            return{
                ...state,
                products: action.payload,
                loading: false
            }
        case CATEGORY_LOADING:
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }
}