import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import Watch from "./Watch/Watch";

const Products = () => {
  const [products] = useProducts();
  return (
    <div className="container">
      <Row xs={1} md={3} className="g-4">
        {products.map(
          (product, index) =>
            index < 6 && <Watch key={product._id} product={product} />
        )}
      </Row>
      <div className="text-center my-3">
        <Link to="/products">
          <button>show more</button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
