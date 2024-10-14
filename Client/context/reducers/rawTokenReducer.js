const rawTokenReducer = (state = null, action) => {
    switch (action.type) {
        case "GET_RAW_TOKEN":
            return state;

        case "SET_RAW_TOKEN":
            return action.token;

        default:
            return state;
    }
}

export default rawTokenReducer;