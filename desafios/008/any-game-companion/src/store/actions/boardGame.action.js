import { boardGameTypes } from "../types";

const { SELECT_BOARD_GAME } = boardGameTypes

export const selectBoardGame = (id) => ({
    type: SELECT_BOARD_GAME,
    gameId: id
})