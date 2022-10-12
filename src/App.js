import React from 'react';
import { Route, Routes } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './Components/loginform';
import RegisterPage from './Components/RegisterPage';
import ForgetPasswordPage from './Components/ForgetPasswordPage';


const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/forget-password" element={<ForgetPasswordPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

