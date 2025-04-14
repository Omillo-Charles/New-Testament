import React, { useEffect, useState } from "react";

const Ministries = () => {
  const [churches, setChurches] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [regionFilter, setRegionFilter] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("http://localhost:5000/churches")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => a.name.localeCompare(b.name));
        setChurches(sorted);
        setFiltered(sorted);
      });
  }, []);

  const handleFilter = (region) => {
    setRegionFilter(region);
    setCurrentPage(1);
    const filteredData = region
      ? churches.filter((c) => c.region === region)
      : churches;
    setFiltered(filteredData);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedChurches = filtered.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return (
    <div className="church-table-container">
      <h2>NEW TESTAMENT CHURCHES.</h2>

      <div className="filters">
        <label>Filter by Region:</label>
        <select onChange={(e) => handleFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Nairobi">Nairobi</option>
          <option value="Mombasa">Mombasa</option>
          <option value="Kisumu">Kisumu</option>
          {/* Add more regions if needed */}
        </select>
      </div>

      <table className="table-style">
        <thead>
          <tr>
            <th>Church Name</th>
            <th>Pastor</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
          {paginatedChurches.map((church) => (
            <tr key={church.id}>
              <td>{church.name}</td>
              <td>{church.pastor}</td>
              <td>{church.region}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <label>Show:</label>
        <select
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>

        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              prev < totalPages ? prev + 1 : prev
            )
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Ministries;