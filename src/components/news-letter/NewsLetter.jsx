import "./newsLetter.css";
import newsImg from "../../image/dubai-230076_1280.jpg";

const NewsLetter = () => {
  return (
    <div className="news-container">
      <div className="news-img">
        <img src={newsImg} alt="newsImage" />
      </div>
      <div className="news-desc">
        <h2>Your journy is waiting</h2>
        <p>
          Receive a curated 48 hours itinerary featuring the most iconic
          experience in dubai.
        </p>
        <input type="text" placeholder="Your Email" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default NewsLetter;
