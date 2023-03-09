import { BOARD_GAMES } from "../../constants/data/boardGames";
import { boardGameTypes } from "../types";

const { SELECT_BOARD_GAME } = boardGameTypes

const initialState = {
    boardGames: BOARD_GAMES,
    selected: null
}

const boardGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_BOARD_GAME:
            const indexBoardGame = state.boardGames.findIndex((bg) => bg.id === action.gameId)

            if (indexBoardGame === -1) return state

            return {
                ...state, selected: state.boardGames[indexBoardGame]
            }
        default:
            return state
    }
}

export default boardGameReducer