import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('boardGames.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS boardGames (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL, playerQty TEXT NOT NULL, image TEXT);',
        [],
        () => resolve(),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};

export const insertBoardGame = (title, description, playerQty, image) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO boardGames (title, description, playerQty, image) VALUES (?,?,?,?);'
      ),
        [title, description, playerQty, image],
        (_, result) => {
          return result;
        },
        (_, error) => reject(error);
    });
  });

  return promise;
};

export const getBoardGames = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM  boardGames',
        [],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise
};
