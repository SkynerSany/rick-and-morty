import { IPaginationProps } from './pagination-interfaces';
import './pagination.scss';

export default function Pagination({ setCurrentPage, currentPage, allPages }: IPaginationProps) {
  function setPage(page: number) {
    if (page < 1 || page > allPages) return;
    setCurrentPage(page);
  }

  return (
    <section className="pagination">
      <button className="pagination__button" onClick={() => setPage(currentPage - 1)}>
        {'<'}
      </button>
      <div className="pagination__center">
        <p className="pagination__current-page">{currentPage}</p>
        <p className="pagination__separator">/</p>
        <p className="pagination__all-page">{allPages}</p>
      </div>
      <button className="pagination__button" onClick={() => setPage(currentPage + 1)}>
        {'>'}
      </button>
    </section>
  );
}
