import "./sortInput.css";

const SortInput = ({ setSort, sortItem }) => {
  console.log(sortItem);
  return (
    <div className="sort-input-container">
      <select value={sortItem} onChange={(e) => setSort(e.target.value)}>
        <option>Recomended</option>
        <option>High</option>
        <option>Low</option>
      </select>
    </div>
  );
};

export default SortInput;
