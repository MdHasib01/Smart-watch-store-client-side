import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useProducts from "../../hooks/useProducts";
import "../../App.css";
import useAuth from "../../hooks/useAuth";
const ProductDetails = () => {
  const { user } = useAuth();
  const { productId } = useParams();
  const [products] = useProducts();
  console.log(user.email);
  const placedOrders = products.filter((product) => product._id === productId);

  const { register, handleSubmit } = useForm();

  const userData = {
    name: user.displayName,
    email: user.email,
  };

  const onSubmit = (data) => {
    console.log(data);
    const ordersData = { userData, order: placedOrders };
    axios.post("http://localhost:8080/orders", ordersData).then((res) => {
      if (res.data.insertedId) {
        alert("Data added seccessfully");
      }
      console.log(res);
    });
  };

  return (
    <>
      <div className="orders-main-sec container">
        <div>
          <h2 className="head-text text-center mb-5">Product details</h2>
          {products
            .filter((product) => product._id === productId)
            .map((product) => (
              <div className="order-sec" key={product._id}>
                <img src={product.img} alt="" />
                <h2>{product.name}</h2>
                <h3>
                  <span className="primary-color">${product.price}</span>
                </h3>
                <p>{product.detais}</p>
              </div>
            ))}
        </div>

        <div className="order-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name")}
              defaultValue={user.displayName}
              required
            />
            <input {...register("email:")} defaultValue={user.email} />
            <input type="number" {...register("phone")} placeholder="phone" />
            <input
              className="primary-btn my-3"
              type="submit"
              value="Order Now"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
