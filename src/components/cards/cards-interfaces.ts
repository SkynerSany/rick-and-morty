import React from 'react';

export interface ICardsProps {
  search: string;
  setAllPages: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}
