import TYPES from "./types";

const appInitialState = {
    user: {
        id: 0,
        email: "",
        type: null
    },
    navigation: {
        actual: 1,
        total: 2
    }
}

/**
 * Reducer of the application
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const appReducer = (state, action) => {
    switch (action.type) {
        case TYPES.LOGIN:
            const { id, email, user } = action.payload;
            return { ...state, user: { id, email, user } }
        case TYPES.LOGOUT:
            return appInitialState;
        default:
            return state
    }
}

export { appInitialState, appReducer }