import { combineReducers } from 'redux'
import categoriesReducer from './categoriesReducer'
import productReducer from './productReducer'

export default combineReducers({
    category: categoriesReducer,
    product: productReducer
})