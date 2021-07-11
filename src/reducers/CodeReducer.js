const initial = [];

const CodeReducer = (state=initial, action) => {
    switch(action.type){
        case "ADD_FUNC":
            state = [...state, action.payload]
            return state;
        case "REMOVE_FUNC":
            state = [...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)];
            return state;
        default:
            return state;
    }
}

export default CodeReducer;