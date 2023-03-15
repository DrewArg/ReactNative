import { createSlice } from '@reduxjs/toolkit';

import { insertBoardGame, getBoardGames } from '../db';

import BoardGame from '../models/boardGame';

const initialState = {
  boardGames: [],
};

const boardGameSlice = createSlice({
  name: 'boardGame',
  initialState,
  reducers: {
    addBoardGame: (state, action) => {
      const newBoardGame = new BoardGame(
        action.payload.id.toString(),
        action.payload.title,
        action.payload.description,
        action.payload.playerQty,
        action.payload.image
      );

      state.boardGames.push(newBoardGame);
    },
    setBoardGames: (state, action) => {
      state.boardGames = action.payload;
    },
  },
});

export const { addBoardGame, setBoardGames } = boardGameSlice.actions;

export const saveBoardGame = (title, description, playerQty, image) => {
  return async (dispatch) => {
    try {
      const result = await insertBoardGame(title, description, playerQty, image);

      dispatch(addBoardGame({ id: result.insertId, title, description, playerQty, image }));
    } catch (error) {
      console.error('error: ', error);
      throw error;
    }
  };
};

export const loadBoardGames = () => {
  return async (dispatch) => {
    try {
      const result = await getBoardGames();
      dispatch(setBoardGames(result?.rows?._array));
    } catch (error) {
      console.error('error: ', error);
      throw error;
    }
  };
};

export default boardGameSlice.reducer
