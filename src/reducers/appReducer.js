import TYPES from "./types";

const appInitialState = {
    user: {
        id: 0,
        email: "",
        type: null
    },
    navigation: {
        current: 1,
        total: 2
    },
    score: {
        "1": {
            attemps: 1
        },
        "2": {
            attemps: 1
        }
    },
    total: {
        totalStars: 0,
        totalAttempts: 0,
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
        case TYPES.NEXT_LEVEL:
            if (state.navigation.current >= state.navigation.total) {
                const newNavigation = {
                    current: state.navigation.total,
                    total: state.navigation.total
                }
                return { ...state, navigation: newNavigation }
            }
            return { ...state, navigation: { current: (state.navigation.current + 1), total: state.navigation.total } }
        case TYPES.PREVIOUS_LEVEL:
            if (state.navigation.current <= 1) {
                const newNavigation = {
                    current: 1,
                    total: state.navigation.total
                }
                return { ...state, navigation: newNavigation }
            }
            return { ...state, navigation: { current: (state.navigation.current - 1), total: state.navigation.total } }
        case TYPES.ADD_ATTEMP:
            const currentLevel = state.navigation.current;
            const newAttemp = state.score[currentLevel].attemps + 1;

            return { ...state, score: { ...state.score, [currentLevel]: { attemps: newAttemp } } }
        default:
            return state
    }
}

export { appInitialState, appReducer }