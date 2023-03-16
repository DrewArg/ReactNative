import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('bgames.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS bgames (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL, playerQty TEXT NOT NULL, image TEXT NOT NULL);',
        [],
        () => {
          resolve();
        },
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
        'INSERT INTO bgames (title, description, playerQty, image) VALUES (?,?,?,?);',
        [title, description, playerQty, image],
        (_, result) => {
          resolve(result);
        },
        (_, error) => reject(error)
      );
    });
  });

  return promise;
};

export const getBoardGames = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM bgames',
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

  return promise;
};
