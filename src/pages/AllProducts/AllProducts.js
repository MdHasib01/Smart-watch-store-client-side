import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";
import Watch from "../Home/Products/Watch/Watch";

const AllProducts = () => {
  const [products] = useProducts();

  return (
    <div className="container my-5">
      <Row xs={1} md={3} className="g-4">
        {products.map((product) => (
          <Watch key={product._id} product={product} />
        ))}
      </Row>
    </div>
  );
};

export default AllProducts;
