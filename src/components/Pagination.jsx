
import React from 'react';

const Pagination = ({ currentPage, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / 10);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className='absolute bottom-10 mx-auto flex h-8 gap-2 my-4'>
      <button
         className={`${currentPage===1 ? 'bg-white hover:bg-slate-200 transition-colors opacity-25 border border-gray-300 rounded-md px-2 py-2' :'bg-white  hover:bg-slate-200 transition-colors border border-gray-300 rounded-md px-2 py-2' }$`}
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      >
        First
      </button>

      <button
        className={`${currentPage===1 ? 'bg-white hover:bg-slate-200 transition-colors opacity-25 border border-gray-300 rounded-md px-2 py-2' :'bg-white  hover:bg-slate-200 transition-colors border border-gray-300 rounded-md px-2 py-2' }$`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {[...Array(totalPages).keys()].map((page) => (
        <button
          className={`${currentPage===page+1 ? 'bg-white border border-gray-300 rounded-md px-2 py-2' :'bg-black  transition-colors text-white border border-gray-400 rounded-md px-2 py-2'}$`}
          key={page + 1}
          onClick={() => handlePageChange(page + 1)}
        >
          {page + 1}
        </button>
      ))}

      <button
         className={`${currentPage===totalPages ? 'bg-white hover:bg-slate-200 transition-colors opacity-25 border border-gray-300 rounded-md px-2 py-2' :'bg-white  hover:bg-slate-200 transition-colors border border-gray-300 rounded-md px-2 py-2' }$`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>

      <button
        className={`${currentPage===totalPages ? 'bg-white hover:bg-slate-200 transition-colors opacity-25 border border-gray-300 rounded-md px-2 py-2' :'bg-white  hover:bg-slate-200 transition-colors border border-gray-300 rounded-md px-2 py-2' }$`} 
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  );
};
export default Pagination;
