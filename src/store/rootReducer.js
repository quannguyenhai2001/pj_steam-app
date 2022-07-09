import { combineReducers } from 'redux';
import gameReducer from './slices/gameSlice'

const rootReducer= combineReducers({
    games: gameReducer,
});

export default rootReducer