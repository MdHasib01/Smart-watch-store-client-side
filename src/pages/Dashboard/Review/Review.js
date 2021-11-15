import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import SingleReview from "./SingleReview/SingleReview";

const Review = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch("http://localhost:8080/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const myData = orders.filter((order) => order.userData.email === user.email);
  console.log(myData);
  return (
    <div>
      <h2>this is my orders</h2>
      {myData.map((orderData) => (
        <div>
          <h3 key={orderData._id}>
            {orderData.order[0].brand} || $ {orderData.order[0].price}
            <SingleReview />
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Review;
