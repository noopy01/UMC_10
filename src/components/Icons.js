import React from 'react';

export const ChevronDown = ({ onClick }) => {
  return (
    <svg
      onClick={onClick} // 클릭 이벤트 핸들러 추가
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6' // 스타일링 클래스 추가
      fill='none'
      //viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
    </svg>
  );
};

export const ChevronUp = ({ onClick }) => {
  return (
    <svg
      onClick={onClick} // 클릭 이벤트 핸들러 추가
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6' // 스타일링 클래스 추가
      fill='none'
      //viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7' />
    </svg>
  );
};
