import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./../../reducers/slices/User";
import axios from "axios";
import Header from "../../components/Header";
import "./RegisterPost.css"

const RegisterPost = () => {
  const dispatch = useDispatch();
  const { data, apiUrl } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handelSutmid = (e) => {
    e.preventDefault();
    const idButton=e.nativeEvent.submitter.id;
    if(idButton=='add'){
       alert("Se grego un post");
    }else{
      navigate("/home");
    }
    navigate("/home");
    /*
    let dataForm = Object.fromEntries(new FormData(e.target));
    let form = new FormData();

    form.append("image",dataForm.image);
    form.append("tex_enty",dataForm.tex_enty);
    form.append("categorie_id",dataForm.categorie_id);
    form.append("user_id",data.id);
    console.log(form,data);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post(apiUrl + "ticketRegister", form, config)
      .then((resp) => {
        console.log(resp.data);
        //dispatch(setUser(resp.data));
        //navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
      */
  };

  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="row  vh-100 justify-content-center align-items-center">
          <div className="col-auto bg-light p-5 shadow-lg">
            <div className="card-header">
              <h1 className="text-secondary">Publica tu arte</h1>
            </div>
            <form
              className="border-bottom border-secondary p-4 form "
              onSubmit={(e) => handelSutmid(e)}
            >
              <div className="mb-3">
                Imágen
                <input
                  type="file"
                  id="avatar"
                  name="image"
                  accept="image/png, image/jpeg"
                  className="form-control form-control-lg bg-light btn-outline-success text-dark"
                />
              </div>
              <div className="mb-3">
                Descripción *required
                <input
                  className="form-control mb-3 bg-light btn-outline-success text-dark"
                  type="text"
                  name="tex_enty"
                />
              </div>
              <div className="mb-3">
                Categoria *required
                <select
                  name="categorie_id"
                  className="form-select bg-light btn-outline-success text-dark"
                >
                  <option value="1" className="high">Value 1</option>
                  <option value="1">Value 2</option>
                  <option value="1">Value 3</option>
                </select>
              </div>

              <div className="buttons">
                <button className="form-login__load btn btn-success" id='add'>
                  Publicar
                </button>
                <button className="form-login__load btn btn-success" id='clouse'>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPost;
