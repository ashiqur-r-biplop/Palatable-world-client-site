import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInGoogle = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const signInGithub = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const ProfileUpdate = (name, PhotoUrl) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: PhotoUrl,
    });
    setLoading(true);
  };
  const authInfo = {
    user,
    signUp,
    signInGoogle,
    signInGithub,
    login,
    logout,
    loading,
    ProfileUpdate,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
