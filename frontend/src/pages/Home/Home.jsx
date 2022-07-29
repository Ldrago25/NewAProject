import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "./../../reducers/slices/User";
import Login from "./../Login/Login";

const Home=()=>{
    const dispatch = useDispatch();
    const { data,login } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const CerrarSeccion=()=>{
        dispatch(setLogin(false));
        navigate("/login");
    }
    return(
        <>
        {
            (login)?(
                <div>
                  Hola Home
                  <Link to={"/RegisterPost"}>Registrar Post</Link>
                  <button onClick={()=>{CerrarSeccion()}}>Cerrar Seccion</button>
                </div>
            ):(
             <Login></Login>
            )
        }
        </>

    )
}
export default Home;