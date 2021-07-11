import DragReducer from './DragReducer';
import CodeReducer from './CodeReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    DragReducer,
    CodeReducer
})

export default rootReducer;