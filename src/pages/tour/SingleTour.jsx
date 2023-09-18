import "./singleTour.css"
import { useParams } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { toursList } from "../../data";
import Rating from "../../components/tours/Rating";
import TourInfo from "./TourInfo";
import TourDesc from "./TourDesc";

const SingleTour = () => {
  const {id} = useParams();
  const tour = toursList.find(ele => ele.id === +id)
  console.log(tour);
  return (
    <div className="singleTour-container">
      <small>
        United Arab Emirates <BsChevronRight className="right-icon" /> 
        Things To Do In Dubai
      </small>
      <p className="adventure">Adventure</p>
      <h2>{tour.title}</h2>
      <Rating rating={tour.rating} reviews={tour.reviews}/>
      <TourInfo price={tour.priceFrom} image={tour.image}/>
      <TourDesc/>
    </div>
  );
};

export default SingleTour;
