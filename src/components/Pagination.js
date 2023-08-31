
import React, { useState } from "react";

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([]);
  const maxPageNumber = Math.ceil(totalCards / cardsPerPage);
  const maxPageNumberLimit = 10;
  const minPageNumberLimit = 0;

  const generatePageNumbers = (currentPage) => {
    let tempPageNumbers = [];
    for (
      let i = currentPage;
      i <= Math.min(currentPage + maxPageNumberLimit - 1, maxPageNumber);
      i++
    ) {
      tempPageNumbers.push(i);
    }
    setPageNumbers(tempPageNumbers);
  };

  React.useEffect(() => {
    generatePageNumbers(currentPage);
  }, []);

  const onClick = (number, e) => {
    e.preventDefault();
    paginate(number);
    setCurrentPage(number);
    generatePageNumbers(number);
  };

  const handleNextBtn = () => {
    if (currentPage + maxPageNumberLimit - 1 < maxPageNumber) {
      setCurrentPage(currentPage + maxPageNumberLimit);
      generatePageNumbers(currentPage + maxPageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    if (currentPage > minPageNumberLimit + maxPageNumberLimit) {
      setCurrentPage(currentPage - maxPageNumberLimit);
      generatePageNumbers(currentPage - maxPageNumberLimit);
    }
  };

  return (
    <nav>
      <ul className="pagination">
        <li>
          <button onClick={handlePrevBtn} disabled={currentPage === minPageNumberLimit + maxPageNumberLimit}>
            Prev
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={(e) => onClick(number, e)}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
        <li>
          <button onClick={handleNextBtn} disabled={currentPage + maxPageNumberLimit - 1 >= maxPageNumber}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

