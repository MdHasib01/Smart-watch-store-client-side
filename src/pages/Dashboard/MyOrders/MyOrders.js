import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch("http://localhost:8080/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const myData = orders.filter((order) => order.userData.email === user.email);
  console.log(myData);
  let totalPrice = 0;
  myData.forEach((data) => {
    totalPrice += parseInt(data.order[0].price);
  });
  console.log("total price", totalPrice);
  const handleCancelOrder = (id) => {
    const proceed = window.confirm("are you want to delete");
    if (proceed) {
      const url = `http://localhost:8080/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingOrder = orders.filter(
              (placedOrder) => placedOrder._id !== id
            );
            setOrders(remainingOrder);
          }
        });
    }
  };
  return (
    <div>
      <h2>this is my orders</h2>
      <div className="row">
        <div className="col-md-8">
          {myData.map((orderData) => (
            <div>
              <h3 key={orderData._id}>
                {orderData.order[0].brand} || $ {orderData.order[0].price}
              </h3>
              <button onClick={() => handleCancelOrder(orderData._id)}>
                Cancel Order
              </button>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <h2>cart</h2>
          <h4>Total Price: $ {totalPrice}</h4>
          <Link to="/dashboard/paynow">
            <button>Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
