import PropTypes from 'prop-types';

const Pagination = ({ products, postPerPage, setCurrentPage }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(products / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="text-center">
      {pages.map((page, index) => (
        <button
          key={index}
          className="px-2 m-2 border border-black shadow-sm btn btn-primary"
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  products: PropTypes.number.isRequired,
  postPerPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
