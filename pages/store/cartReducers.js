const initialState = []

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            state = [...state]
            // console.log(state)
            return state;
            break
        default:
            return state;
    }
}

export default cartReducers