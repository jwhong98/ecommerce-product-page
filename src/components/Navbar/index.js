import React from "react";
import NavMenu from "../NavMenu/index";
import {
  Header,
  Nav,
  Section,
  ToggleMenu,
  Logo,
  Personal,
  Cart,
  Profile,
} from "./NavbarElements";
import menu from "../../images/icon-menu.svg";
import logo from "../../images/logo.svg";
import cart from "../../images/icon-cart.svg";
import profile from "../../images/image-avatar.png";

const Navbar = (props) => {
  return (
    <Header>
      <Nav>
        <Section>
          <ToggleMenu src={menu} onClick={props.onOpen} />
          <Logo src={logo} />
          <NavMenu />
        </Section>
        <Personal>
          <Cart src={cart} />
          <Profile src={profile} />
        </Personal>
      </Nav>
    </Header>
  );
};

export default Navbar;
