import React from "react";
import "./tours.css";
import Rating from "./Rating";
import { Link } from 'react-router-dom'
const Tours = ({ toursList }) => {
  return (
    <div className="tours-container">
      {toursList.map((ele) => (
        <div className="tour">
          <div className="tour-img">
            <img src={ele.image} alt="tour_image" />
            <p>Adventure</p>
          </div>
          <div className="tour-info">
            <h3>{ele.title}</h3>
            <p>
              {ele.duration} 
            </p>
            <span>Pichup available</span>
            <Rating rating={ele.rating} reviews = {ele.reviews}/>
            <p className="price"><span>From {`$${ele.priceFrom}`} </span>per person</p>
              <Link to={`/tour/${ele.id}`} className="tour-btn">See More</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tours;
