import React from 'react';

export interface ICardsProps {
  setAllPages: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}
