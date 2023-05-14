import TYPES from "./types";

const appInitialState = {
    user: {
        id: 0,
        email: "",
        type: null,
        isLogged: false
    },
    navigation: {
        current: 1,
        total: 4
    },
    score: {
        "1": {
            topic: "Clase",
            attemps: 0
        },
        "2": {
            topic: "Objeto",
            attemps: 0
        },
        "3": {
            topic: "Atributo",
            attemps: 0
        },
        "4": {
            topic: "Método",
            attemps: 0
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
            const user = { uid, email, name, isLogged: true };
            localStorage.setItem("currentUser", JSON.stringify(user));
            return { ...state, user: user }
        case TYPES.LOGOUT:
            localStorage.removeItem('currentUser');
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
            if (attemps < 1) {
                return { ...state, total: { totalStars: totalStars + 3, totalAttempts: newTotalAttempts } }
            } else if (attemps >= 1 && attemps < 2) {
                return { ...state, total: { totalStars: totalStars + 2, totalAttempts: newTotalAttempts } }
            } else {
                return { ...state, total: { totalStars: totalStars + 1, totalAttempts: newTotalAttempts } }
            }

        default:
            return state
    }
}

export { appInitialState, appReducer }