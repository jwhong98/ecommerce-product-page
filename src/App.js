import "./App.css";
import React, { useState } from "react";
import Content from "./components/Content";
import Hero from "./components/Hero";
import MenuModal from "./components/MenuModal";
import Navbar from "./components/Navbar/index";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && <MenuModal onClose={onClose} />}
      <Navbar onOpen={onOpen} />
      <Hero />
      <Content />
    </>
  );
}

export default App;
