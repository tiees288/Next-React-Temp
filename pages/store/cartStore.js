import { useStore } from 'react-redux'
import { createStore } from 'redux'
import cartReducers from '../store/cartReducers'

const cartStore = createStore(cartReducers);

export default cartStore