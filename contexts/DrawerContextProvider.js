import React, { useState, createContext } from "react";

export const drawerContext = createContext();

export default function DrawerContextProvider({ children }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <drawerContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </drawerContext.Provider>
  );
}
