
import React from 'react';

const Pagination = ({ currentPage, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / 10);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className='flex gap-2 my-2'>
      <button
        className='bg-white border border-gray-300 rounded-md px-2 py-1'
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      >
        First
      </button>

      <button
        className='bg-white border border-gray-300 rounded-md px-2 py-1'
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {[...Array(totalPages).keys()].map((page) => (
        <button
          className={`${currentPage===page+1 ? 'bg-white border border-gray-300 rounded-md px-2 py-1' :'bg-black text-white border border-gray-400 rounded-md px-2 py-1'}$`}
          key={page + 1}
          onClick={() => handlePageChange(page + 1)}
        >
          {page + 1}
        </button>
      ))}

      <button
        className='bg-white border border-gray-300 rounded-md px-2 py-1'
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>

      <button
        className='bg-white border border-gray-300 rounded-md px-2 py-1'
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  );
};
export default Pagination;
