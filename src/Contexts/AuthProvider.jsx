import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config'

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);


  //create new user
  const createNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //sign in with email and pass
  const signInWithEmailAndPass = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  //sign in with google 
  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  }

  //update user profile
  const updateUserProfile = (name, photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  // get current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('Observing user', currentUser)
      setUser(currentUser);
      setLoading(false)
    });

    return () => unsubscribe();
  }, []);

  //sign out user
  const signOutUser = () => {
    return signOut(auth);
  }


  const authInfo = {
    createNewUser,
    user,
    signOutUser,
    googleSignIn,
    updateUserProfile,
    signInWithEmailAndPass,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
