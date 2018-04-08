import {combineReducers} from 'redux'

function login( state = '', action) {
    switch(action.type){
        case 'login':
        // 将登录状态存在localstorage里
            localStorage.setItem('login', action.payload)
            return action.payload;
        default: return state
    }
}
var goodsList = []
function goods( state = [], action) {
    switch(action.type){
        case 'goods': 
            if(goodsList.id !== action.payload.id){
                goodsList.push(action.payload)
            }
            var cartMsg = Array.from(new Set(goodsList))
            localStorage.setItem('goods', cartMsg)
            return cartMsg;
        default: return state
    }
}

const Status = combineReducers({
    login,
    goods
})

export default Status
