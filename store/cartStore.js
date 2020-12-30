import { useStore } from 'store/node_modules/react-redux'
import { createStore } from 'store/node_modules/redux'
import cartReducers from 'store/cartReducers'

const cartStore = createStore(cartReducers);

export default cartStore