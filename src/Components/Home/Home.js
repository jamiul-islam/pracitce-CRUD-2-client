import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import initializeAuthentication from "../../Hooks/firebase";
import Header from "../Header/Header";

initializeAuthentication();

const Home = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    fetch("https://rocky-mesa-99896.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  //   console.log(user);
  // ------------------handleDelete
  const handleDelete = (id) => {
    const url = `https://rocky-mesa-99896.herokuapp.com/users/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount === 1) {
          alert("Successfully deleted one document.");
          const remaining = user.filter((item2) => item2._id !== id);
          setUser(remaining);
        }
      });
  };
  return (
    <>
      <Header></Header>
      <div className="w-2/4 mx-auto mt-8">
        <h1 className="text-purple-600 text-6xl" sx={{ textAlign: "center" }}>
          server side is working
        </h1>
        <div className="mt-8">
          <Link
            className="rounded-md bg-green-600 hover:bg-green-500 text-gray-50 p-2"
            to="/adduser"
          >
            add user
          </Link>
          <div>
            <div>
              <p
                className="mt-8 text-blue-500 text-3xl underline"
                sx={{ textAlign: "center" }}
              >
                all users
              </p>
            </div>
            <div className="text-left">
              {user?.map((item) => (
                <div className="mt-4 border-2 border-green-200">
                  <div className="ml-2">
                    <Link
                      to={`/details/${item._id}`}
                      key={item._id}
                      className="text-blue-400"
                    >
                      details
                    </Link>

                    <h1>Name: {item.name}</h1>
                    <h6>Email: {item.email}</h6>
                    <h6>Age: {item.age}</h6>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className=" text-red-500 text-2xl"
                    >
                      X
                    </button>
                    <Link
                      to={`/details/${item._id}`}
                      className=" ml-4 text-yellow-600 text-2xl"
                    >
                      upadate
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
