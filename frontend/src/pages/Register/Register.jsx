import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogin,setUser } from "./../../reducers/slices/User";
import axios from 'axios';

const Register=()=>{
    const dispatch = useDispatch();
    const { data,apiUrl } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const onsubmit=(e)=>{
      e.preventDefault();
      let data=Object.fromEntries(new FormData(e.target));
      axios.post(apiUrl+'userRegister',data)
      .then((resp)=>{
        console.log(resp);
        alert("Se creo registro");
        e.target.name.value='';
        e.target.email.value='';
        e.target.password.value='';
        e.target.password1.value='';

      })

    }
    return(
     <div>
         <form onSubmit={(e)=>{onsubmit(e)}}>
            <label htmlFor="">
               name:<input type="text" name="name" />
            </label>
            <label htmlFor="">
               Email:<input type="email" name="email" />
            </label>
            <label htmlFor="">
               Password:<input type="password" name="password" />
            </label>
            <label htmlFor="">
               retry Password:<input type="password" name="password1" />
            </label>
            <button >Registro</button>
         </form>
         <Link to={"/login"}>login</Link>
     </div>
    ) 
}

export default Register;