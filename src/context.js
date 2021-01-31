import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sidebarOpen = () => {
    setIsSidebarOpen(true);
  };
  const sidebarClose = () => {
    setIsSidebarOpen(false);
  };
  const modalOpen = () => {
    setIsModalOpen(true);
  };
  const modalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        sidebarOpen,
        sidebarClose,
        modalOpen,
        modalClose,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
