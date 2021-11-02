import { useState, useEffect } from 'react';

export const useDBSis = (database) => {
  const [db, setdb] = useState(null);

  useEffect(() => {
    const dbRef = database.ref('messages/sis');
    dbRef.on('value', snapshot => {
      setdb(snapshot.val())
    })

  }, [database]);

  return db;
}