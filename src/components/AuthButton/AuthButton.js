import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../redux/authSlice.js';
import './AuthButton.css'; 

const AuthButton = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ username: 'testuser' }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="auth-button-container">
      {isLoggedIn ? (
        <button className="auth-button logout-button" onClick={handleLogout}>Logout</button>
      ) : (
        <button className="auth-button" onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default AuthButton;
