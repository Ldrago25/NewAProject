import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogin, setUser } from "./../../reducers/slices/User";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const { data, apiUrl } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handelSutmid = (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    axios.post(apiUrl + "user", data).then((resp) => {
      dispatch(setLogin(true));
      dispatch(setUser(resp.data));
      navigate("/home");
    });
  };
  return (
    <div className="container">
      <div className="row  vh-100 justify-content-center align-items-center">
        <div className="col-auto bg-light p-5 shadow-lg">
          <div className="card-header">
            <h1 className="text-secondary">Inicio de sesión</h1>
          </div>
          <form
            className="border-bottom border-secondary p-4 form "
            onSubmit={(e) => handelSutmid(e)}
          >
            <div className="mb-3">
              <input
                className="form-control mb-3 bg-light btn-outline-success text-dark"
                type="email"
                name="email"
                placeholder="Correo electrónico"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control mb-3 bg-light btn-outline-success text-dark"
                type="password"
                name="password"
                placeholder="********"
              />
            </div>
            <button className="form-login__load btn btn-success">
              Iniciar sesión
            </button>
          </form>
          <p className="small text-center">
            ¿Aún no te has registrado?{" "}
            <Link className="text-success" to="/register">
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
