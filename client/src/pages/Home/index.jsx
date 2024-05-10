import React from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";

const HomePage = (props) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <Header />
      <h1>Hello {user ? `${user.firstName} ${user.lastName}` : 'Guest'}</h1>
    </div>
  );
};

export default HomePage;
