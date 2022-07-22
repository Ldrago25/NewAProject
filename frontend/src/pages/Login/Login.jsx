import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogin,setUser } from "./../../reducers/slices/User";
import axios from 'axios';

const Login=()=>{
    const dispatch = useDispatch();
    const { data,apiUrl } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const onsubmit=(e)=>{
      e.preventDefault();
      let data=Object.fromEntries(new FormData(e.target));
      axios.post(apiUrl+'user',data)
      .then((resp)=>{
        dispatch(setLogin(true));
        dispatch(setUser(resp.data));
        navigate("/home");
      })

    }
    return(
     <div className="container">
      <div className="row  vh-100 justify-content-center align-items-center">
        <div className="col-auto bg-light p-5 shadow-lg">
          <div className="card-header">
            <h1 className='text-secondary'>Log in</h1>
          </div>
          <form className="border-bottom border-secondary p-4 form " onSubmit={(e) => handelSutmid(e)}>
            <div className="mb-3">
              <input
                className="form-control mb-3"
                type="email"
                name="email"
                placeholder='Email'
                />
            </div>
            <div className="mb-3">
              <input
                className="form-control mb-3"
                type="password"
                name="password"
                placeholder='******'
              />
            </div>
            <button className="form-login__load btn btn-primary">iniciar sesion</button>
          </form>
           <Link to={"/register"}>register</Link>
          <p className="small text-center">Do not have an Account?<Link to="/register">Register</Link></p>
        </div>
      </div>
    </div>
    ) 
 }
 
 export default Login;