// Pagination.js
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Ikonalarni import qilish
import './pagnation.css'
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const renderPageNumbers = () => {
    return [...Array(totalPages)].map((_, index) => {
      const pageNumber = index + 1;
      const isActive = currentPage === pageNumber;

      return (
        <button
          key={pageNumber}
          className='pagnation__item'
          onClick={() => onPageChange(pageNumber)}
          style={{
            backgroundColor: isActive ? '#00415A' : 'white',
            color: isActive ? 'white' : '#00415A',
        
          }}
        >
          {pageNumber}
        </button>
      );
    });
  };

  return (
    <div className='pagnation' >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          margin: '5px',
          backgroundColor:'#00415A',
          color: 'white',
          opacity: currentPage === 1 ? 0.5 : 1,

        }}
        title="Oldingi"
      >
        <FaChevronLeft />
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
          margin: '5px',
          backgroundColor:'#00415A',
          color: 'white',
          opacity: currentPage === totalPages ? 0.5 : 1,
        }}
        title="Keyingi"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;