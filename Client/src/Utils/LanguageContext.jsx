import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fa");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fa" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// هوک برای استفاده راحت‌تر در کامپوننت‌ها
export const useLanguage = () => useContext(LanguageContext);
