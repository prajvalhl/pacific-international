import { createContext, useContext, useState } from "react";

const Navigation = createContext();

export function NavProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Navigation.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </Navigation.Provider>
  );
}

export function useNav() {
  return useContext(Navigation);
}
