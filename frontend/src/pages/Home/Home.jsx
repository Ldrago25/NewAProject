import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "./../../reducers/slices/User";
import Login from "./../Login/Login";

const Home=()=>{
    const dispatch = useDispatch();
    const { data,login } = useSelector((state) => state.user);
    const navigate = useNavigate();

    return(
        <>
        {
            (login)?(
                <div>
                  Hola Home
                </div>
            ):(
             <Login></Login>
            )
        }
        </>

    )
}
export default Home;