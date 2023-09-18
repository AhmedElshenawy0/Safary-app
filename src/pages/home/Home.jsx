import "./home.css";
import Service from "../../components/service/Service";
import Tours from "../../components/tours/Tours";
import { toursList } from "../../data";
import Pagination from "../../components/pagination/Pagination";
import SortInput from "../../components/sort-input/SortInput";
import Banner from "../../components/banner/Banner";
import NewsLetter from "../../components/news-letter/NewsLetter";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortValue, setSortValue] = useState("Recomended");

  const TOUR_PER_PAGE = 6;

  const page = Math.ceil(toursList.length / TOUR_PER_PAGE);
  const startIndex = (currentPage - 1) * TOUR_PER_PAGE;
  const finishIndex = currentPage * TOUR_PER_PAGE;

  let sortingTours =
    sortValue === "Low"
      ? toursList.sort((a, b) => a.priceFrom - b.priceFrom)
      : sortValue === "High"
      ? toursList.sort((a, b) => b.priceFrom - a.priceFrom)
      : toursList.sort((a, b) => b.rating - a.rating);

  let sortorder = sortingTours.slice(startIndex, finishIndex);
  return (
    <div>
      <div className="main-img">
        <div className="search">
          <div style={{ width: "100%" }}>
            <FaSearch style={{ color: "blue", marginRight: "10px" }} />
            <input type="search" placeholder="What are you looking for ?" />
          </div>
          <button>Search</button>
        </div>
        <div className="header-title">
          <h1>Desert Safaris</h1>
        </div>
      </div>
      <Service />
      <SortInput setSort={setSortValue} sortItem={sortValue} />
      <Tours toursList={sortorder} />
      <Pagination
        pages={page}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Banner />
      <NewsLetter />
    </div>
  );
};

export default Home;
