import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import "./tours.css";

const Rating = ({ reviews, rating }) => {
  return (
    <div className="rating">
      {rating >= 1 ? (
        <BsStarFill className="fill" />
      ) : rating >= 0.5 ? (
        <BsStarHalf className="half" />
      ) : (
        <BsStar className="empty" />
      )}
      {rating >= 2 ? (
        <BsStarFill className="fill" />
      ) : rating >= 1.5 ? (
        <BsStarHalf className="half" />
      ) : (
        <BsStar />
      )}
      {rating >= 3 ? (
        <BsStarFill className="fill" />
      ) : rating >= 2.5 ? (
        <BsStarHalf className="half" />
      ) : (
        <BsStar />
      )}
      {rating >= 4 ? (
        <BsStarFill className="fill" />
      ) : rating >= 3.5 ? (
        <BsStarHalf className="half" />
      ) : (
        <BsStar />
      )}
      {rating >= 5 ? (
        <BsStarFill className="fill" />
      ) : rating >= 4.5 ? (
        <BsStarHalf className="half" />
      ) : (
        <BsStar />
      )}
      <span>{` ${rating} `} <span style={{color: "gray", margin: "0 5px"}}>{`(${reviews}) reviews`}</span></span>
    </div>
  );
};

export default Rating;
