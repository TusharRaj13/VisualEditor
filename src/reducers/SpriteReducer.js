import CatSprite from '../components/CatSprite'
import CrabSprite from '../components/CrabSprite';
const initial = [
    {
        name: 'Cat',
        sprite : CatSprite,
        code : [],
        id: 'catSprite'
    }
]

const SpriteReducer = (state = initial, action) => {
    console.log(action)
    switch(action.type){
        case "ADD_SPRITE":
            state = [...state, action.payload];
            return state;
        case "REMOVE_SPRITE":
            state = [...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)];
            return state;
        case "ADD_SPRITE_ACTION":
            state = state.map(
                (item, i) => (i === action.payload.index) ? (
                    {...item, code : [...item.code, action.payload.code ]}
                 ) : item
            )
            console.log(state);
            return state;
        case "REMOVE_SPRITE_ACTION":
            state =  state.map(
                (item, i) => (i === action.payload.index) ? (
                    {...item, code: [ ...item.code.slice(0, action.payload.rindex),
                    ...item.code.slice(action.payload.rindex + 1)]}
                ) : item
            )
            return state;
        case "CLEAR_SPRITE_ACTION":
            state = state.map(
                (item, i) => (i === action.payload) ? 
                {...item, code: [] } : item
            )
            return state;
        default:
            return state;
    }
}

export default SpriteReducer;