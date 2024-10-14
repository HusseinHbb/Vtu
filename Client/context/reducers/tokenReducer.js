const authTokenReducer = (state = null, action) => {
    switch (action.type) {
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_TOKEN_NULL":
            return {
                ...state,
                token: null
            }



        default:
            return state;
    }
}

export default authTokenReducer;