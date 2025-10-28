// src/pages/LoginRegister/index.jsx
import React, { useEffect, useState } from "react";
import Register from "./Register";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext.jsx";

export default function LoginRegister() {
  const navigate = useNavigate();
  const [haveAccount, setHaveAccount] = useState(false);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // Redirect to home if authenticated
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      {haveAccount ? (
        <Login setHaveAccount={setHaveAccount} />
      ) : (
        <Register setHaveAccount={setHaveAccount} />
      )}
    </>
  );
}
