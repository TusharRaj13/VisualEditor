const IndexReducer = (state = 0, action) => {
    switch(action.type){
        case "SELECT_INDEX":
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default IndexReducer;