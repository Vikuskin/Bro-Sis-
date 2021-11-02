import { useState, useEffect } from 'react';

export const useDBBro = (database) => {
  const [db, setdb] = useState(null);

  useEffect(() => {
    const dbRef = database.ref('messages/bro');
    dbRef.on('value', snapshot => {
      setdb(snapshot.val())
    })

  }, [database]);

  return db;
}