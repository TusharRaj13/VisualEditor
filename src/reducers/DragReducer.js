const initial = []

const DragReducer = (state = initial, action) => {
    switch(action.type){
        case "ADD_OBJ":
            state = [...state, action.payload];
            return state;
        case "REMOVE_OBJ":
            state = [...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)];
            return state;
        default:
            return state;
    }
}

export default DragReducer;