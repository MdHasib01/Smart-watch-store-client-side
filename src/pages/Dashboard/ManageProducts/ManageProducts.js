import React from "react";
import useProducts from "../../../hooks/useProducts";

const ManageProducts = () => {
  const [products, setProducts] = useProducts();

  const handleProductDelete = (id) => {
    const proceed = window.confirm("are you want to delete");
    if (proceed) {
      const url = `http://localhost:8080/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingProducts = products.filter(
              (product) => product._id !== id
            );
            setProducts(remainingProducts);
          }
        });
    }
  };
  return (
    <div>
      <h2>This is manage prosucts</h2>
      {products.map((product) => (
        <div>
          <h3>
            {product.brand} || {product.name}
          </h3>
          <button onClick={() => handleProductDelete(product._id)}>
            Delete Products
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageProducts;
