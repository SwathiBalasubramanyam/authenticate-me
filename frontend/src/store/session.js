import csrfFetch from "./csrf"

export const SET_SESSION_USER = "sessions/SET_SESSION_USER"
export const REMOVE_SESSION_USER = "sessions/REMOVE_SESSION_USER"

const setSessionUser = (user) => {
    return {
        type: SET_SESSION_USER,
        user: user
    }
}

const removeSessionUser = () => {
    return {
        type: REMOVE_SESSION_USER
    }
}

export const login = (email, password) => {
    return async(dispatch) => {
        const res = await csrfFetch('/api/session', {
            method: "POST",
            body: JSON.stringify({email: email, password: password}),
            headers: {
                'Accept': 'application/json'
            }
        })
        const data = await res.json();
        dispatch(setSessionUser(data.user));
    }
}

export const logout = () => {
    return async(dispatch) => {
        const res = await csrfFetch('/api/session', {method: 'DELETE'})
        dispatch(removeSessionUser());
    }
}

const sessionReducer = (state = {user: null}, action) => {
    let nextState = {...state}
    switch (action.type) {
        case SET_SESSION_USER:
            nextState.user = action.user
            return nextState;
        case REMOVE_SESSION_USER:
            nextState.user = null;
            return nextState;
        default:
            return state;
    }
}

export default sessionReducer;