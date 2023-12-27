import React, { createContext } from "react";
import { auth } from "../auth/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Navigate, useNavigate } from "react-router";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  let navigate = useNavigate();
  const createUser = async (email, password) => {
    try {
      let response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const signIn = async (email, password) => {
    try {
      let user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const values = { createUser, signIn };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
