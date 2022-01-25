import "./App.css";
import React, { useState } from "react";
import Content from "./components/Content";
import Hero from "./components/Hero";
import MenuModal from "./components/MenuModal";
import Navbar from "./components/Navbar/index";
import CartModal from "./components/CartModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  const onOpenCart = () => {
    setOpenCart(true);
  };
  const onCloseCart = () => {
    setOpenCart(false);
  };
  return (
    <>
      {isOpen && <MenuModal onClose={onClose} />}
      {openCart && <CartModal onCloseCart={onCloseCart} />}
      <Navbar onOpen={onOpen} onOpenCart={onOpenCart} />
      <Hero />
      <Content />
    </>
  );
}

export default App;
