import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../FirebaseConfige';

export default function Dashboard() {
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);

  // Detect logged-in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
        setUserData(null);
      }
    });
  }, []);

  // Fetch user data
  useEffect(() => {
    if (userId) {
      getDoc(doc(db, 'Users', userId)).then((res) => {
        if (res.exists()) {
          setUserData(res.data());
        } else {
          console.log('No user document found');
        }
      });
    }
  }, [userId]);

  return (
    <div>
      <h1 className="text-5xl font-bold text-purple-600 text-center mt-20 animate-bounce transition duration-500 ease-in-out">
        Welcome to Dashboard
      </h1>

      {userData ? (
        <h2 className="text-center text-3xl mt-10 text-purple-600 font-semibold">Hello, {userData.name}</h2>
      ) : (
        <h2 className="text-center mt-8 text-gray-500">Loading...</h2>
      )}
    </div>
  );
}
