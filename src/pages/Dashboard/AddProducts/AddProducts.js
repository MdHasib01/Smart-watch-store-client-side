import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:8080/products", data).then((res) => {
      if (res.data.insertedId) {
        alert("Data added seccessfully");
      }
      console.log(res);
    });
    console.log(data);
  };

  return (
    <div>
      <h2>This is add Products</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="name" />
        <input {...register("brand")} placeholder="brand" />
        <input {...register("detais")} placeholder="details" />
        <input {...register("img")} placeholder="image url" />
        <input type="number" {...register("price")} placeholder="price" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddProducts;
