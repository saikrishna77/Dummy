import React, { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [collapsed, setcollapsed] = useState(false);
  const [currentDashboard, setCurrentDashboard] = useState({
    tag: "Home",
    desc: "Home",
  });
  return (
    <AppContext.Provider
      value={{ collapsed, setcollapsed, currentDashboard, setCurrentDashboard }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
