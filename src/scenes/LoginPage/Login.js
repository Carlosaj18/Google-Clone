import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { auth, provider } from "../../firebase";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const dispatch = useDispatch();
  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        })
      );
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt="Gmail Login"
        />
        <Button onClick={signIn}>Login</Button>
      </div>
    </div>
  );
}

export default Login;
