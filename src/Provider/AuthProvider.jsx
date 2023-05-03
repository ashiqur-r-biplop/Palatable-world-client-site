import React, { createContext } from "react";

export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInGoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const signInGithub = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const authInfo = {
    signUp,
    signInGoogle,
    signInGithub,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
