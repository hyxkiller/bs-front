import {combineReducers} from 'redux'

function show( state = false, action ){
    switch(action.type){
        case 'show': return action.payload;
        default: return state
    }
}

function login( state = 'Login', action){
    switch(action.type){
        case 'login':
        // 将登录状态存在localstorage里
            localStorage.setItem('login', action.payload)
            return action.payload;
        default: return state
    }
}

const Status = combineReducers({
    show,
    login
})

export default Status
