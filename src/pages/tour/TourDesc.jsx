import "./singleTour.css";
import { BsBookmarkCheck } from "react-icons/bs";
const TourDesc = () => {
  return (
    <div className="tour-desc-container">
      <p>
        Discover a different side of Dubai which is a fun filled safari <br />{" "}
        and enjoy an amazing immersive experience
      </p>
      <div className="activities">
        <h2>About This Activity</h2>
        <div className="activity">
          <h3>
            <BsBookmarkCheck
              style={{ color: "green", marginRight: "5px", fontSize: "22px" }}
            />
            Free Cancellation
          </h3>
          <p>Cancel up to 24 hours in advance for a full refund</p>
        </div>
        <hr />
        <div className="activity">
          <h3>
            <BsBookmarkCheck
              style={{ color: "green", marginRight: "5px", fontSize: "22px" }}
            />
            Reserve now & Pay later
          </h3>
          <p>keep your travel plan flexible</p>
        </div>
        <hr />
        <div className="activity">
          <h3>
            <BsBookmarkCheck
              style={{ color: "green", marginRight: "5px", fontSize: "22px" }}
            />
            Live tour guide
          </h3>
          <p>English</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default TourDesc;
