import React, { useContext } from "react";
import NavMenu from "../NavMenu/index";
import {
  Header,
  Nav,
  Section,
  ToggleMenu,
  Logo,
  Personal,
  Span,
  Badge,
  Cart,
  Profile,
} from "./NavbarElements";
import menu from "../../images/icon-menu.svg";
import logo from "../../images/logo.svg";
import cart from "../../images/icon-cart.svg";
import profile from "../../images/image-avatar.png";
import CartContext from "../store/cart-context";

const Navbar = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <Header>
      <Nav>
        <Section>
          <ToggleMenu src={menu} onClick={props.onOpen} />
          <Logo src={logo} />
          <NavMenu />
        </Section>
        <Personal>
          <Span>
            <Cart src={cart} onClick={props.onOpenCart} />
            {cartCtx.quantity !== 0 && <Badge>{cartCtx.quantity}</Badge>}
          </Span>
          <Profile src={profile} />
        </Personal>
      </Nav>
    </Header>
  );
};

export default Navbar;
