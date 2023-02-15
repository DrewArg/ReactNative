import { createStore, combineReducers } from 'redux'

import { boardGameReducer } from './reducers'

const rootReducer = combineReducers({
    boardGames: boardGameReducer
})

export default createStore(rootReducer)