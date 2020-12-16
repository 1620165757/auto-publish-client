import {SAVE_USER} from "../action/userAction";

const initState = {
    uer: JSON.parse(sessionStorage.getItem('userInfo')) || {}
};

(()=>{
    try{
        initState.uer = JSON.parse(sessionStorage.getItem('userInfo')) || {}
    }catch (e) {
        initState.uer = {}
    }
})();

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case SAVE_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state
    }
};

export default userReducer
