import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {  setUser } from "./../../reducers/slices/User";
import axios from "axios";

const RegisterPost = () => {
  const dispatch = useDispatch();
  const { data, apiUrl } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handelSutmid = (e) => {
    e.preventDefault();
    let form = Object.fromEntries(new FormData(e.target));
    form.user_id=data.id;
    console.log(form,data);
    
    axios.post(apiUrl + "ticketRegister", data)
    .then((resp) => {
        console.log(resp.data);
      //dispatch(setUser(resp.data));
      //navigate("/home");
    })
    .catch((error)=>{
     console.log(error);
    });
    
  };
  return (
    <div className="container">
      <div className="row  vh-100 justify-content-center align-items-center">
        <div className="col-auto bg-light p-5 shadow-lg">
          <div className="card-header">
            <h1 className="text-secondary">Registrar Post</h1>
          </div>
          <form
            className="border-bottom border-secondary p-4 form "
            onSubmit={(e) => handelSutmid(e)}
          >
            <div className="mb-3">
            Img:<input type="file"
       id="avatar" name="image"
       accept="image/png, image/jpeg" className="mb-3 bg-light btn-outline-success text-dark"/>
            </div>
            <div className="mb-3">
              Text:<input
                className="form-control mb-3 bg-light btn-outline-success text-dark"
                type="text"
                name="tex_enty"
                required
              />
            </div>
            <div className="mb-3">
              Categori:<select name="categorie_id" required>
                <option value="1">Value 1</option>
                <option value="1">Value 2</option>
                <option value="1">Value 3</option>
              </select>
            </div>
            <button className="form-login__load btn btn-success">
              Registra
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPost;