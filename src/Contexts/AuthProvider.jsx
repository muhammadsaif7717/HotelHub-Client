import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config'

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  //create new user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //sign in with email and pass
  const signInWithEmailAndPass = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  //sign in with google 
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  }

  //update user profile
  const updateUserProfile = (name, photo) => {
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
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
