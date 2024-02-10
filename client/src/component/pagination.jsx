import React from "react";

const Pagination = ({ currentPage, totalPages, onPrevious, onNext }) => {
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <div className="flex justify-center mt-4">
      {hasPrevious && (
        <button
          onClick={onPrevious}
          className="flex  mr-2 items-center mt-4 md:mt-0 text-white bg-amber-400 rounded-3xl px-4 hover:bg-amber-700 duration-300"
        >
          Previous
        </button>
      )}
      <span className="flex items-center text-white  ">Page {currentPage}</span>
      {hasNext && (
        <button
          onClick={onNext}
          className="flex  ml-2 items-center mt-4 md:mt-0 text-white bg-amber-400 rounded-3xl px-4 hover:bg-amber-700 duration-300"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
