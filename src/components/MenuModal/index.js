import React from "react";
import ReactDOM from "react-dom";
import { Backdrop, Overlay, CloseIcon, Menu, Item } from "./MenuModalElements";
import close from "../../images/icon-close.svg";

const MenuModal = (props) => {
  const portalElement = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose}>
          <Overlay>
            <CloseIcon src={close} onClick={props.onClose} />
            <Menu>
              <Item>collections</Item>
              <Item>men</Item>
              <Item>women</Item>
              <Item>about</Item>
              <Item>contact</Item>
            </Menu>
          </Overlay>
        </Backdrop>,
        portalElement
      )}
    </>
  );
};

export default MenuModal;
