
let initialState = {
    count: 0,
}

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + action.value
            }

        case 'decrement': 
            return {
                count: state.count - action.value
            }

        default:
            return state

    }
}

export default counterReducer;