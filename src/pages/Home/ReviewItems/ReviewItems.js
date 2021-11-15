import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";

const ReviewItems = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  //   console.log(reviews);
  return (
    <div className="container">
      <h2>this is review</h2>
      <div className="row">
        {reviews.map((userReview) => (
          <div className="col-md-4">
            <h2>{userReview.name}</h2>
            <p>{userReview.review.review}</p>
            <Rating name="read-only" value={userReview.rating} readOnly />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewItems;
