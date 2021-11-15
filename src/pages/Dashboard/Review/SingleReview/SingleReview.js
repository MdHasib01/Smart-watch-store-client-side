import React, { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import { Rating, Typography } from "@mui/material";

const SingleReview = () => {
  const { user } = useAuth();

  const [review, setReview] = useState("");
  const [value, setValue] = useState(0);
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...review };
    newInfo[field] = value;
    setReview(newInfo);
    e.preventDefault();
  };
  const handleReviewSubmit = (e) => {
    const reviewData = {
      name: user.displayName,
      email: user.email,
      review,
      rating: value,
    };
    axios.post("http://localhost:8080/reviews", reviewData).then((res) => {
      if (res.data.insertedId) {
        alert("Data added seccessfully");
      }
      console.log(res);
    });
    e.preventDefault();
  };

  return (
    <div>
      <Typography component="legend">Rate this products</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />

      <form onSubmit={handleReviewSubmit}>
        <input
          type="text"
          name="review"
          onBlur={handleBlur}
          placeholder="Review this products"
        />
        <input type="submit" value="Review" />
      </form>
    </div>
  );
};

export default SingleReview;
