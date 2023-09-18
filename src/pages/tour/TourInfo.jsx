import "./singleTour.css"
import {BsCalendarCheck} from "react-icons/bs"

const TourInfo = ({price, image}) => {
  return (
    <div className="singleTour-info">
    <img src={image} alt="" />
    <div className="book-info">
      <h3 className="save">Save up to 30%</h3>
      <div className="price-and-book">
        <div className="price">
          <b style={{color: "red"}}>{`$${price}`}</b>
          <span style={{color: "gray", marginLeft: "10px"}}>per person</span>
        </div>
        <button className="book">Book Now</button>
        <p className="book-now">
          <BsCalendarCheck style={{color: "green", marginRight: "10px", fontSize:"19px"}}/>
          Book now to reserve your Spot
        </p>
      </div>
    </div>
  </div>
  )
}

export default TourInfo