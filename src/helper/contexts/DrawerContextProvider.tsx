'use client';

import { useState, createContext, SetStateAction, Dispatch } from 'react';

type DefaultValuesTypes = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>> | null;
};
export const drawerContext = createContext({
  isOpen: false,
  setOpen: null,
} as DefaultValuesTypes);

export default function DrawerContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setOpen] = useState(false);
  return (
    <drawerContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </drawerContext.Provider>
  );
}
