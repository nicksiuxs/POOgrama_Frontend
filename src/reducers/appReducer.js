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
            topic: "Clase",
            attemps: 1
        },
        "2": {
            topic: "Atributo",
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
            const { uid, email, name } = action.payload;
            return { ...state, user: { uid, email, name } }
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
            return { ...state, score: { ...state.score, [currentLevel]: { ...state.score[currentLevel], attemps: newAttemp } } }
        case TYPES.ADD_STARS:
            const level = state.navigation.current;
            const attemps = state.score[level].attemps;
            const totalStars = state.total.totalStars;
            const newTotalAttempts = state.total.totalAttempts + attemps;
            if (attemps <= 1) {
                return { ...state, total: { totalStars: totalStars + 3, totalAttempts: newTotalAttempts } }
            } else if (attemps > 1 && attemps <= 2) {
                return { ...state, total: { totalStars: totalStars + 2, totalAttempts: newTotalAttempts } }
            } else {
                return { ...state, total: { totalStars: totalStars + 1, totalAttempts: newTotalAttempts } }
            }

        default:
            return state
    }
}

export { appInitialState, appReducer }