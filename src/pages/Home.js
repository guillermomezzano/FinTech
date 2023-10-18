import React from "react";

// components
import Sidebar from "../../src/components/modules/ui/sideBar/SideBar";
import Header from "../components/layouts/Header";
import BottonNavBar from "../components/modules/BottonNavBar";
// import NavBar from "../ui/sideBar/NavBar";

const Home = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <BottonNavBar />
    </div>
  );
};

export default Home;
