import React from "react";
import { useState, useEffect } from "react";

const ManageOrders = () => {
  const [placedOrders, setPlacedOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/orders")
      .then((res) => res.json())
      .then((data) => setPlacedOrders(data));
  }, []);
  console.log(placedOrders);

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
            const remainingOrder = placedOrders.filter(
              (placedOrder) => placedOrder._id !== id
            );
            setPlacedOrders(remainingOrder);
          }
        });
    }
  };
  return (
    <div>
      <h2>This is manage orders</h2>
      {placedOrders.map((placedOrder) => (
        <div>
          <h3>{placedOrder.userData.email}</h3>
          <button onClick={() => handleCancelOrder(placedOrder._id)}>
            Cancel Order
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageOrders;
