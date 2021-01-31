import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { sidebarOpen, modalOpen } = useGlobalContext();

  return (
    <main>
      <button onClick={sidebarOpen} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={modalOpen} className="btn">
        Open Modal
      </button>
    </main>
  );
};

export default Home;
