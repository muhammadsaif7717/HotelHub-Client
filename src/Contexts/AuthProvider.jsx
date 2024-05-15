import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config'
import axios from "axios";

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
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail }

      setUser(currentUser);
      // console.log('Observing user', currentUser)
      setLoading(false)
      // if user exist then issue a token
      if (currentUser) {
        axios.post('https://hotelhub-server-one.vercel.app/jwt', loggedUser, { withCredentials: true })
          .then(() => {
            // console.log('Token Response', res.data)
          })
      }
      else {
        axios.post('https://hotelhub-server-one.vercel.app/logout', loggedUser, { withCredentials: true })
          .then(() => {
            // console.log('Token Response', res.data)
          })
      }
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
