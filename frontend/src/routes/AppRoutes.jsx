import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './../pages/404/NotFound';
import Login from './../pages/Login/Login';
import Register from './../pages/Register/Register';
import RegisterPost from '../pages/RegisterPost/RegisterPost';
import Home from "../pages/Home/Home";
import Perfil from '../pages/Perfil/Perfil';
import Chat from '../pages/Chat/Chat';
import Notifications from '../pages/Notifications/Notifications';

const AppRoutes= ()=>{
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registerPost" element={<RegisterPost />} />
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
       </BrowserRouter>
      )
}

export default AppRoutes;