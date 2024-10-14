export const setRawToken = (token) => {
    return {
        type: "SET__RAW_TOKEN",
        token: token
    }
}

export const getRawToken = () => {
    return {
        type: "GET_RAW_TOKEN",

    }
}