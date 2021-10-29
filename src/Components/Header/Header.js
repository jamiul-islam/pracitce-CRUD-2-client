import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link className="text-3xl ml-4 text-green-500" to="/home">
        Home
      </Link>
      <Link className="text-3xl ml-4 text-green-500" to="/addUser">
        addUser
      </Link>
      <Link className="text-3xl ml-4 text-green-500" to="/addUser"></Link>
    </div>
  );
};

export default Header;
