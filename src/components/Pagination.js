import React from "react";

const Pagination = ({ cardsPerPage, totalCards, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onClick = (number, e) => {
    e.preventDefault();
    paginate(number);
  };

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers
          .filter((number) => number <= 10) // Filtrar las primeras 10 páginas
          .map((number) => (
            <li key={number} className={`page-item ${number === currentPage ? "active" : ""}`}>
              <a
                onClick={(e) => onClick(number, e)}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Pagination;
