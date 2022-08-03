import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogin, setUser } from "./../../reducers/slices/User";
import axios from "axios";

const Register = () => {
  const dispatch = useDispatch();
  const { data, apiUrl } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const onsubmit = (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    data.role_id=2;
    axios.post(apiUrl + "userRegister", data).then((resp) => {
      console.log(resp);
      alert("Se creo registro");
      e.target.name.value = "";
      e.target.email.value = "";
      e.target.password.value = "";
      e.target.password1.value = "";
    });
  };
  return (
    <div className="container">
      <div className="row  vh-100 justify-content-center align-items-center">
        <div className="col-auto bg-light p-5 shadow-lg">
          <div className="card-header">
            <h1 className="text-secondary">Crear cuenta</h1>
          </div>
          <form
            className="border-bottom border-secondary p-4 form "
            onSubmit={(e) => {
              onsubmit(e);
            }}
          >
            <input
              placeholder="Nombre"
              type="text"
              name="name"
              className="form-control mb-3 bg-light btn-outline-success text-dark"
            />
            <input
              placeholder="Correo electrónico"
              type="email"
              name="email"
              className="form-control mb-3 bg-light btn-outline-success text-dark"
            />
            <input
              placeholder="Contraseña"
              type="password"
              name="password"
              className="form-control mb-3 bg-light btn-outline-success text-dark"
            />
            <input
              placeholder="Repita la contraseña"
              type="password"
              name="password1"
              className="form-control mb-3 bg-light btn-outline-success text-dark"
            />
            <button className="form-login__load btn btn-success">
              Comenzar
            </button>
          </form>

          <p className="small text-center">
            ¿Ya tienes una cuenta?{" "}
            <Link className="text-success" to="/login">
              Iniciar sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
