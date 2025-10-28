// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    try {
      const storedStatus = localStorage.getItem("userLoginStatus");
      return storedStatus === "true";
    } catch (error) {
      console.error("Error reading login status from localStorage:", error);
      return false;
    }
  });

  // بروزرسانی localStorage همزمان با تغییر وضعیت
  useEffect(() => {
    try {
      localStorage.setItem("userLoginStatus", isLoggedIn);
    } catch (error) {
      console.error("Error updating login status in localStorage:", error);
    }
  }, [isLoggedIn]);

  const login = (userData) => {
    try {
      setIsLoggedIn(true);
      localStorage.setItem("userLoginStatus", "true");
      localStorage.setItem("userData", JSON.stringify(userData));
    } catch (error) {
      console.error("Error saving user data to localStorage:", error);
    }
  };

  const logout = () => {
    try {
      setIsLoggedIn(false);
      localStorage.setItem("userLoginStatus", "false");
      localStorage.removeItem("userData");
    } catch (error) {
      console.error("Error clearing user data from localStorage:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
