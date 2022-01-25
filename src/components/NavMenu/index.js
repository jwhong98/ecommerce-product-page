import React from "react";
import { Menu, MenuItem } from "./NavMenuElements";

const NavMenu = () => {
  return (
    <Menu>
      <MenuItem>Collections</MenuItem>
      <MenuItem>Men</MenuItem>
      <MenuItem>Women</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>Contact</MenuItem>
    </Menu>
  );
};

export default NavMenu;
