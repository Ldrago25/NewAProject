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
     <div>
         <form onSubmit={(e)=>{onsubmit(e)}}>
            <label htmlFor="">
               Email:<input type="email" name="email" />
            </label>
            <label htmlFor="">
               Password:<input type="password" name="password" />
            </label>
            <button >Login</button>
         </form>
         <Link to={"/register"}>register</Link>
     </div>
    ) 
 }
 
 export default Login;