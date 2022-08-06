import * as Icon from "react-bootstrap-icons";
import React, { useRef } from "react";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";   
import "./Header.css";

const Header = () => {
  const menu = useRef(null);

  const items = [
    {
      label: "Options",
      icon: "pi pi-refresh",
      //command: () => {},
    },
    {
      label: "Delete",
      icon: "pi pi-times",
      //command: () => {},
    },
    {
      label: "Navigate",
      icon: "pi pi-external-link",
      //command: (e) => {},
    },
  ];

  return (
    <>
      <nav className="navbar navbar-dark bg-success py-1 p-4">
        <h3 className="title">NewA</h3>

        <ul className="navbar-nav flex flex-row align-items-center">
          <li className="nav-item">
            <img
              src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg"
              alt="Lamp"
              className="item profile"
            />
          </li>
          <li className="nav-item">
            <Icon.ChatRightTextFill className="item"></Icon.ChatRightTextFill>
          </li>
          <li className="nav-item">
            <Icon.BellFill className="item"></Icon.BellFill>
          </li>
          <li className="nav-item">
            <Icon.GearFill className="item"></Icon.GearFill>
          </li>
          <li className="nav-item">
            <Menu model={items} popup ref={menu} id="popup_menu" />
            <Button
              label="Show"
              icon="pi pi-bars"
              onClick={(event) => menu.current.toggle(event)}
              aria-controls="popup_menu"
              aria-haspopup
            />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
