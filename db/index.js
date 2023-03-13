import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("games.db") 

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction( tx => {                           
      tx.executeSql ( 
      "create table if not exists games ( id integer primary key not null, title text not null, image text not null );", 
        [],   
        () => {   
            resolve()
        },
        (_, err) => {   
            reject(err)
        }
      )
    })
  })
  return promise 
}

export const insertGames = (title, image) => {
  const promise = new Promise ((resolve, reject) => {
    db.transaction( tx => {
      tx.executeSql(
        "insert into games (title, image) VALUES (?, ?);",
        [ title, image ], 
        (_, result) => resolve(result), 
        (_, err) => reject(err)  
      )
    })
  })
  return promise 
}


export const fetchGames = () => {
  const promise = new Promise ((resolve, reject) => {
    db.transaction( tx => {
      tx.executeSql(
        "SELECT * FROM  games",  
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      )
    })
  })
  return promise 
}