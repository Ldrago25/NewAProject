import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "./../../reducers/slices/User";
import Login from "./../Login/Login";
import Header from "../../components/Header";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { data, login } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const CerrarSeccion = () => {
    dispatch(setLogin(false));
    navigate("/login");
  };
  return (
    <>
      {login ? (
        <div>
          <Header></Header>
          <div className="cont">
            <div className="posts">
              <Link className="btn btn-success" to={"/RegisterPost"}>Publica tu arte</Link>
            </div>
          </div>
        </div>
      ) : (
        <Login></Login>
      )}
    </>
  );
};
export default Home;
