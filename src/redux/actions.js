export const login = (dispatch, data) => {
    const action = {
        type: 'login',
        payload: data
    }
    dispatch(action)
}

export const goods = (dispatch, data) => {
    const action = {
        type: 'goods',
        payload: data
    }
    dispatch(action)
}
