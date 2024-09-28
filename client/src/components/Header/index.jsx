import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/slices/authSlice";
import { clearTokens } from "../../api";

function Header(props) {
  const dispatch = useDispatch();

  const hendleLogout = () => {
    clearTokens();
    dispatch(logout());
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
        </ul>
      </nav>
      <button onClick={hendleLogout}>Logout</button>
    </header>
  );
}

export default Header;
