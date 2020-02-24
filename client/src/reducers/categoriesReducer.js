import { GET_CATEGORY, CATEGORY_LOADING } from "../actions/types"

const initialState = {
    categories: [],
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
        case CATEGORY_LOADING:
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }
}