import "./pagination.css";
const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  let pagesNum = [];
  for (let i = 1; i <= pages; i++) {
    pagesNum.push(i);
  }
  console.log(pagesNum);
  return (
    <div className="pagination">
      {pagesNum.map((ele) => (
        <span
          className={currentPage === ele ? "active" : "num"}
          onClick={() => setCurrentPage(ele)}
          key={ele}
        >
          {ele}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
