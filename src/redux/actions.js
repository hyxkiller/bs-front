export const show = (dispatch, data) => {
    const action = {
        type: 'show',
        payload: data
    }
    dispatch(action)
}

export const login = (dispatch, data) => {
    const action = {
        type: 'login',
        payload: data
    }
    dispatch(action)
}
