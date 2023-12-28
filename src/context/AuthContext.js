import React, { createContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { success, error, errorMsg } from "../helpers/Tostify";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUSer] = useState(false);
  useEffect(() => {
    userTracker();
  }, []);

  let navigate = useNavigate();
  const createUser = async (email, password, displayName) => {
    try {
      let response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      await userTracker();

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

  const userTracker = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        console.log(user);
        setCurrentUSer({ email, displayName, photoURL });
      } else {
        setCurrentUSer(false);
        console.log("logged out");
      }
    });
  };
  const signUpProvider = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };
  const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        success("Please check your email");
      })
      .catch((error) => {
        errorMsg(error.message);
      });
  };

  const values = {
    createUser,
    signIn,
    logout,
    currentUser,
    signUpProvider,
    forgotPassword,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
