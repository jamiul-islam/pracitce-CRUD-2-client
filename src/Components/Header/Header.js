import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="bg-yellow-50 py-4">
        <Link
          className="font-bold border-r-2 pr-2 -mr-2 text-3xl ml-4 text-green-500"
          to="/home"
        >
          Home
        </Link>
        <Link className="font-bold text-3xl ml-4 text-green-500" to="/addUser">
          AddTodo
        </Link>
        <Link className="text-3xl ml-4 text-green-500" to="/addUser"></Link>
      </div>
    </div>
  );
};

export default Header;
