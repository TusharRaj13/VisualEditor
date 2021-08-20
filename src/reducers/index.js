import DragReducer from './DragReducer';
import CodeReducer from './CodeReducer';
import SpriteReducer from './SpriteReducer';
import IndexReducer from './IndexReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    DragReducer,
    CodeReducer,
    SpriteReducer,
    IndexReducer
})

export default rootReducer;