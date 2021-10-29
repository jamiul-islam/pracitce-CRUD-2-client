import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Header from "../Header/Header";

const AddUser = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("https://rocky-mesa-99896.herokuapp.com/adduser", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("user adding successfully :)");
          reset();
        }
      });
  };
  return (
    <div>
      <Header></Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-green-700 text-7xl underline mt-8">add user</h2>
        <div className="w-2/4 p-2 flex flex-col mx-auto">
          <input
            className="p-3 m-1 border-2  border-green-500"
            {...register("name")}
            placeholder="name"
          />
          <input
            className="p-3 m-1 border-2  border-green-500"
            type="email"
            {...register("email")}
            placeholder="email"
          />
          <input
            className="p-3 m-1 border-2  border-green-500"
            type="number"
            {...register("age")}
            placeholder="age"
          />
          <input
            className="p-3 m-1 border-2 bg-green-500 rounded-md border-green-300 hover:bg-green-300 focus:border-blue-500"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddUser;
