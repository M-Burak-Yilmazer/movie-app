import React, { createContext } from "react";
import { auth } from "../auth/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Navigate, useNavigate } from "react-router";
import { success, error, errorMsg } from "../helpers/Tostify";

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
      navigate("/");
      success("Registered to Movie App");
    } catch (error) {
      console.log(error);
      errorMsg(error.message);
    }
  };
  const signIn = async (email, password) => {
    try {
      let user = await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      success("Login to Movie App");
      console.log(user);
    } catch (error) {
      errorMsg(error.message);
    }
  };
  const logout = () => {
    signOut(auth)
      .then(() => {
        success("You logged out to Movie App!");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const values = { createUser, signIn, logout };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
