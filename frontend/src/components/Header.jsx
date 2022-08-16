import * as Icon from "react-bootstrap-icons";
import React, { useRef } from "react";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const menu = useRef(null);

  const style = {
    backgroundColor: "	#198754",
    border: "none",
    color: "white",
  };

  const items = [
    {
      label: "Publicar",
      icon: "pi pi-upload",
      command: () => {
        navigate("/registerPost");
      },
    },
    {
      label: "Ir a inicio",
      icon: "pi pi-home",
      command: () => {
        navigate("/home");
      },
    },
    {
      label: "Cerrar sesión",
      icon: "pi pi-power-off",
      command: (e) => {
        navigate("/login");
      },
    },
  ];

  const navigation = (value) => {
    navigate("/" + value);
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-success py-1 p-4">
       
        <Link className="text-success" to="/home"> <h3 className="title">NewA</h3></Link>
        <ul className="navbar-nav flex flex-row align-items-center">
          <li className="nav-item">
            <Link className="text-success" to="/perfil">
              <img
                src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg"
                alt="Lamp"
                className="item profile"
                onClick={navigation("perfil")}
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="text-success" to="/chat">
              <Icon.ChatRightTextFill className="item"></Icon.ChatRightTextFill>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="text-success" to="/notifications">
              <Icon.BellFill className="item"></Icon.BellFill>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="text-success" to="/config">
              <Icon.GearFill className="item"></Icon.GearFill>
            </Link>
          </li>
          <li className="nav-item">
            <Menu model={items} popup ref={menu} id="popup_menu" />
            <Button
              className="p-button-rounded p-button-text"
              icon="pi pi-bars"
              onClick={(event) => menu.current.toggle(event)}
              aria-haspopup
              aria-controls="popup_menu"
              style={style}
            />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
