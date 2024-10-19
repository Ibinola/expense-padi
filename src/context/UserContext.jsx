import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../utils/firebase';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const db = getFirestore();
        const userDoc = await getDoc(doc(db, 'users', authUser.uid));
        setUser({ ...authUser, ...(userDoc.exists() ? userDoc.data() : {}) });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
