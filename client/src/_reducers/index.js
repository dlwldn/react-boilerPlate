import {combineReducers} from 'redux';
import user from './user_reducer';
// import comment from './comment_reducer';


//combine리듀서가 여러가지 리듀서를 하나로 합쳐준다

const rootReducer = combineReducers({
    user
})

export default rootReducer;