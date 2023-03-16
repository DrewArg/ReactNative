import { createSlice } from '@reduxjs/toolkit';

import { insertBoardGame, getBoardGames, getById } from '../db';
import * as FileSystem from 'expo-file-system';

import BoardGame from '../models/boardGame';

const initialState = {
  boardGames: [],
  boardGameDetail: null,
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

    setBoardGameDetail: (state, action) => {
      let payload = action.payload;
      state.boardGameDetail = {
        id: payload.id,
        title: payload.title,
        description: payload.description,
        playerQty: payload.playerQty,
        image: payload.image,
      };
    },
  },
});

export const { addBoardGame, setBoardGames, setBoardGameDetail } = boardGameSlice.actions;

export const saveBoardGame = (title, description, playerQty, image) => {
  return async (dispatch) => {
    try {
      const fileName = image.split('/').pop();
      const Path = FileSystem.documentDirectory + fileName;

      await FileSystem.moveAsync({
        from: image,
        to: Path,
      });
      const result = await insertBoardGame(title, description, playerQty, Path);
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

export const loadBoardGameById = (id) => {
  return async (dispatch) => {
    try {
      const result = await getById(id);
      console.log(result);
      dispatch(
        setBoardGameDetail({
          id: result.id,
          title: result.title,
          description: result.description,
          playerQty: result.playerQty,
          image: result.image,
        })
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
};

export default boardGameSlice.reducer;
