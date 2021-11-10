let savedState;
if (window.localStorage.getItem("auth")) {
    savedState = JSON.parse(window.localStorage.getItem("auth"))
} else {
    savedState = null
}


const authReducer = (state = savedState, action) => {

    switch (action.type) {
        case "LOGGED_IN":
            return {
                ...state,
                ...action.payload
            }

        case "LOGOUT":
            return action.payload

        default:
            return state
    }
}

export default authReducer;