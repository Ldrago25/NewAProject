import * as Icon from "react-bootstrap-icons";
import "./Header.css";

const Header = () => {
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
            <Icon.ChevronBarDown className="item"></Icon.ChevronBarDown>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
