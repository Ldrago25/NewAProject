import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "./../../reducers/slices/User";

const Login=()=>{
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const cambio=()=>{
      dispatch(setLogin(true));
      navigate("/register");
    }
    return(
     <div>
         Login
         <button onClick={cambio}>Registro</button>
     </div>
    ) 
 }
 
 export default Login;