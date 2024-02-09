
import React from "react";

const Pagination = ({ currentPage, totalPages, onPrevious, onNext }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className={`bg-gray-500 px-4 py-2 rounded-l cursor-pointer ${
          currentPage === 1 ? "cursor-not-allowed" : ""
        }`}
      >
        Previous
      </button>
      <span className="mx-4">Page {currentPage}</span>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={`bg-gray-500 px-4 py-2 rounded-r cursor-pointer ${
          currentPage === totalPages ? "cursor-not-allowed" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
